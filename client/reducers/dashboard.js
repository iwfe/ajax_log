import { handleActions } from 'redux-actions'

const initialState = {
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
  'clear all' (state, action) {
    return Object.assign({}, state, { records: [] })
  }
}, initialState)
