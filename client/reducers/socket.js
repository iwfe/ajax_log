import io from 'socket.io-client'
import { handleActions } from 'redux-actions'

const initialState = io()

export default handleActions({

}, initialState)
