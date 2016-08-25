import { browserHistory } from 'react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as SocketActions from '../actions/socket'

class IndexPage extends React.Component {
  componentDidMount() {
    const { socket } = this.props

    socket.on('go-dashboard', data => {
      browserHistory.push('/dashboard?mobile_ip=' + data)
    })

    socket.on('dashboard-page-id', data => {
      if (!document.getElementById('qrcode')) {
        return
      }
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

function mapStateToProps(state) {
  return {
    socket: state.socket
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(SocketActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IndexPage)
