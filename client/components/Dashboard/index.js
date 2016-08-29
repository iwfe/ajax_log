import RecordHeader from '../RecordHeader'
import RecordList from '../RecordList'

class Dashboard extends React.Component {
  componentDidMount() {
    const { socket, actions } = this.props

    socket.on('on_req', data => {
      // console.log(data)
      actions.addReq(data)
    })

    socket.on('on_res', data => {
      // console.log(data)
      actions.addRes(data)
    })
  }

  render() {
    const { dashboard, actions } = this.props
    return (
      <div className="left-right-wrap">
        <div className="left">
          <div className="record-list-head">
            <RecordHeader dashboard={dashboard} actions={actions} />
          </div>
          <div className="record-list-body">
            <RecordList dashboard={dashboard} actions={actions} />
          </div>
        </div>
        <div className="right">
        </div>

      </div>
    )
  }
}

export default Dashboard
