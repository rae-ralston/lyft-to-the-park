import { combineReducers } from 'redux'
import modal from './modal'
import {
  campsiteIsLoading,
  campsiteHasErrored,
  NPSFetchSuccess
} from './campsites'

const rootReducer = combineReducers({
  modal,
  campsiteIsLoading,
  campsiteHasErrored,
  NPSFetchSuccess,
})

export default rootReducer
