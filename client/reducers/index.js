import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
import socket from './socket'
import dashboard from './dashboard'

export default combineReducers({
  routing,
  socket,
  dashboard
})
