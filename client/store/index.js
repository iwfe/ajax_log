import { createStore } from 'redux'

import rootReducer from '../reducers'

export default function configureStore(initState) {
  return createStore(rootReducer, initState)
}
