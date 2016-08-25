import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as DashboardActions from '../actions/dashboard'

class DashboardPage extends React.Component {
  componentDidMount() {
    const { socket } = this.props

    socket.on('on_req', data => {
      console.log(data)
    })

    socket.on('on_res', data => {
      console.log(data)
    })
  }

  render() {
    return (
      <div>
        Dashboard page!
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    socket: state.socket,
    dashboard: state.dashboard
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(DashboardActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardPage)
