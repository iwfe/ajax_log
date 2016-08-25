import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux'

import IndexPage from './containers/IndexPage'
import DashboardPage from './containers/DashboardPage'
import configureStore from './store'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={IndexPage}></Route>
      <Route path="/dashboard" component={DashboardPage}></Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
