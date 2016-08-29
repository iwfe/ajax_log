import { handleActions } from 'redux-actions'

const initialState = {
  mobile_ip: '',
  recording: false,
  records: [
    {
      url: '/test/123',
      method: 'GET',
      req: { a: 1 },
      res: { b: 2 }
    }
  ]
}

export default handleActions({
  'start record' (state, action) {
    return Object.assign({}, state, { recording: true })
  },
  'stop record' (state, action) {
    return Object.assign({}, state, { recording: false })
  },
  'add req' (state, action) {
    const newReq = {
      url: action.payload.req_url,
      method: action.payload.req_method,
      req: action.payload.req_data
    }
    return Object.assign({}, state, { records: [newReq, ...state.records] })
  },
  'clear all' (state, action) {
    return Object.assign({}, state, { records: [] })
  },
  'add mobile ip' (state, action) {
    return Object.assign({}, state, { mobile_ip: action.payload })
  }
}, initialState)
