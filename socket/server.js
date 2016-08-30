import config from '../config/config'

module.exports = {
  init(server) {
    const io = require('socket.io')(server)
    const socketMapping = {}
    // 把这两个挂到 this 上
    this.io = io
    this.socketMapping = socketMapping

    io.on('connection', socket => {
      // for create qrcode
      socket.on('get-socket-id', () => {
        const dashboardUrl = `${config.host}:${config.port}/open_dashboard?dashboard_page_id=${socket.id.substr(2, socket.id.length - 2)}`
        io.to(socket.id).emit('dashboard-page-id', dashboardUrl)
      })

      // for open dashboard page
      socket.on('open-dashboard', (data) => {
        const socketKey = '/#' + data.dashboard_page_id
        if (!socketMapping[data.mobile_ip]) {
          socketMapping[data.mobile_ip] = [socketKey]
        } else if (socketMapping[data.mobile_ip].indexOf(socketKey) === -1) {
          socketMapping[data.mobile_ip].push(socketKey)
        }
        // send for dashboard page
        this.sendToClient('go-dashboard', data.mobile_ip, data.mobile_ip)
        // send for mobile page
        io.to(socket.id).emit('close-mobile-page')
      })

      socket.on('disconnect', () => {
        for (let key in socketMapping) {
          const index = socketMapping[key].indexOf(socket.id)
          if (index > -1) {
            socketMapping[key].splice(index, 1)
          }
        }
      })
    })
  },

  sendToClient(eventType, to, data) {
    console.log(this.socketMapping);
    if (this.socketMapping[to]) {
      this.socketMapping[to].forEach(item => {
        console.log(item);
        this.io.to(item).emit(eventType, data)
      })
    }
  }
}
