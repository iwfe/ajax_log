import io from 'socket.io-client'
import { handleActions } from 'redux-actions'

const initialState = io('/', { path: '/socket' })

export default handleActions({

}, initialState)
