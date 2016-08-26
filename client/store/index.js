import { createStore, applyMiddleware } from 'redux'

import { logger } from '../middleware'
import rootReducer from '../reducers'

export default function configureStore(initState) {
  return applyMiddleware(
    logger
  )(createStore)(rootReducer, initState)
}
