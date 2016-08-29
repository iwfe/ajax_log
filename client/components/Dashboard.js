import Header from '../components/Header'
import RecordList from '../components/RecordList'

class Dashboard extends React.Component {
  componentDidMount() {
    const { socket, actions } = this.props

    socket.on('on_req', data => {
      console.log(data)
      actions.addReq(data)
    })

    socket.on('on_res', data => {
      console.log(data)
    })
  }

  render() {
    const { dashboard, actions } = this.props
    return (
      <div>
        <Header dashboard={dashboard} actions={actions} />
        <RecordList dashboard={dashboard} actions={actions} />
      </div>
    )
  }
}

export default Dashboard
