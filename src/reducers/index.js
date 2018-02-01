import { combineReducers } from 'redux'
import modal from './modal'
import campsites from './campsites'

const rootReducer = combineReducers({
  modal,
  campsites,
})

export default rootReducer
