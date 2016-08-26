import { createStore, applyMiddleware } from 'redux'

import { logger } from '../middleware'
import rootReducer from '../reducers'

export default function configureStore(initialState) {
  const create = window.devToolsExtension
    ? window.devToolsExtension()(createStore)
    : createStore

  const createStoreWithMiddleware = applyMiddleware(
    logger
  )(create)

  const store = createStoreWithMiddleware(rootReducer, initialState)

  return store
}
