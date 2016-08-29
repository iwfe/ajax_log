import { browserHistory } from 'react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as SocketActions from '../actions/socket'
import * as DashboardActions from '../actions/dashboard'

import StartPage from '../components/StartPage'
import Dashboard from '../components/Dashboard'

class App extends React.Component {
  render() {
    const { socket, dashboard, actions } = this.props
    const page = dashboard.mobile_ip ? (
      <Dashboard socket={socket} dashboard={dashboard} actions={actions} />
    ) : (
      <StartPage socket={socket} dashboard={dashboard} actions={actions} />
    )
    return page
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
    actions: bindActionCreators(Object.assign({}, SocketActions, DashboardActions), dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
