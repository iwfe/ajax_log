import { handleActions } from 'redux-actions'
import { findIndex } from 'lodash'

const initialState = {
  mobile_ip: '123',
  recording: false,
  currentRecordIndex: 0,
  records: [
    {
      id: 123,
      url: '/test/123',
      method: 'GET',
      status: 200,
      req_data: { a: 1 },
      res_data: { b: 2 }
    },
    {
      id: 456,
      url: '/test/123/eee',
      method: 'GET',
      status: 200,
      req_data: { a: 1 },
      res_data: { b: 2 }
    }
  ]
}

export default handleActions({
  'add req' (state, action) {
    return Object.assign({}, state, { records: [action.payload, ...state.records] })
  },
  'add res' (state, action) {
    const index = findIndex(state.records, { id: action.payload.id })
    const newItem = Object.assign({}, state.records[index], action.payload)
    return Object.assign({}, state, { records: [
      ...state.records.slice(0, index),
      newItem,
      ...state.records.slice(index + 1)
    ] })
  },
  'change current record' (state, action) {
    return Object.assign({}, state, { currentRecordIndex: action.payload })
  },
  'clear all' (state, action) {
    return Object.assign({}, state, { records: [] })
  },
  'add mobile ip' (state, action) {
    return Object.assign({}, state, { mobile_ip: action.payload })
  }
}, initialState)
