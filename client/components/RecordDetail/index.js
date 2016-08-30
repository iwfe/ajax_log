import QrCode from '../QrCode'
import style from './style.css'

class RecordDetail extends React.Component {
  setJSONView() {
    const { dashboard, actions, socket } = this.props
    const currentRecord = dashboard.records[dashboard.currentRecordIndex]
    if (currentRecord) {
      $('#req_data_' + currentRecord.id).JSONView(currentRecord.req_data)
      $('#res_data_' + currentRecord.id).JSONView(currentRecord.res_data)
    }
  }

  componentDidMount() {
    this.setJSONView()
  }

  componentDidUpdate() {
    this.setJSONView()
  }

  render() {
    const { dashboard, actions, socket } = this.props
    const currentRecord = dashboard.records[dashboard.currentRecordIndex]
    let detailContent = null
    if (!dashboard.mobile_ip) {
      detailContent = (
        <QrCode socket={socket} dashboard={dashboard} actions={actions} />
      )
    } else if (!currentRecord) {
      detailContent = (
        <h3>已经开始抓包，请在手机上打开要抓包的页面！</h3>
      )
    } else {
      detailContent = (
        <div className={style.detail}>
          <h4>URL:</h4>
          <div>{currentRecord.url}</div>
          <h4>Request Data:</h4>
          <div id={'req_data_' + currentRecord.id}></div>
          <h4>Response Data:</h4>
          <div id={'res_data_' + currentRecord.id}></div>
        </div>
      )
    }
    return detailContent
  }
}

export default RecordDetail
