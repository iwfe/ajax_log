import { createAction } from 'redux-actions'

export const startRecord = createAction('start record')
export const stopRecord = createAction('stop record')
export const addReq = createAction('add req')
export const addRes = createAction('add res')
export const clearAll = createAction('clear all')
