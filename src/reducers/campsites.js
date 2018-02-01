import {
  CAMPSITE_HAS_ERRORED,
  CAMPSITE_IS_LOADING,
  NPS_FETCH_SUCCESS,
} from '../constants'

export function campsiteHasErrored(state = false, action) {
  switch (action.type) {
    case CAMPSITE_HAS_ERRORED:
      return action.hasErrored

    default:
      return state
  }
}

export function campsiteIsLoading(state = false, action) {
  switch (action.type) {
    case CAMPSITE_IS_LOADING:
      return action.isLoading

    default:
      return state
  }
}

export function NPSFetchSuccess(state = [], action) {
  switch (action.type) {
    case NPS_FETCH_SUCCESS:
      return action.payload

    default:
      return state
  }
}
