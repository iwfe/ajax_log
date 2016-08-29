class StartPage extends React.Component {
  componentDidMount() {
    const { socket, dashboard, actions } = this.props

    socket.on('go-dashboard', data => {
      console.log('go-dashboard', data);
      actions.addMobileIP(data)
      console.log(dashboard.mobile_ip);
    })

    socket.on('dashboard-page-id', data => {
      if (!document.getElementById('qrcode')) {
        return
      }
      console.log(data)
      document.getElementById('qrcode').innerHTML = ''
      new QRCode(document.getElementById('qrcode'), {
        text: data,
        width: 128,
        height: 128,
        colorDark : '#000000',
        colorLight : '#ffffff',
        correctLevel : QRCode.CorrectLevel.H
      })
    })

    socket.emit('get-socket-id')
  }

  render() {
    return (
      <div style={{ padding: '50px' }}>
        <h2>微信扫一下，然后点击打开抓包面板！（如果二维码没出来，请刷新一下）</h2>
        <div id='qrcode'></div>
      </div>
    )
  }
}

export default StartPage
