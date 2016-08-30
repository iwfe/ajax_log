import { createStore, applyMiddleware } from 'redux'

import createLogger from 'redux-logger';
import rootReducer from '../reducers'

const logger = createLogger()

export default function configureStore(initialState) {
  const createStoreWithMiddleware = process.env.NODE_ENV === 'development'
    ? applyMiddleware(logger)(createStore)
    : createStore

  const store = createStoreWithMiddleware(rootReducer, initialState)

  return store
}
