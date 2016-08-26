import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as DashboardActions from '../actions/dashboard'

import Header from '../components/Header'
import RecordList from '../components/RecordList'

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
    const { dashboard, actions } = this.props
    return (
      <div>
        <Header dashboard={dashboard} actions={actions} />
        <RecordList dashboard={dashboard} actions={actions} />
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
