import axios from 'axios'
import {
  CAMPSITE_HAS_ERRORED,
  CAMPSITE_IS_LOADING,
  NPS_FETCH_SUCCESS,
} from '../constants'


export function campsiteHasErrored(bool) {
  return {
    type: CAMPSITE_HAS_ERRORED,
    hasErrored: bool,
  }
}

export function campsiteIsLoading(bool) {
  return {
    type: CAMPSITE_IS_LOADING,
    isLoading: bool,
  }
}

export function NPSFetchSuccess(payload) {
  return {
    type: NPS_FETCH_SUCCESS,
    payload,
  }
}

export function NPSFetchData(url) {
  return (dispatch) => {
    dispatch(campsiteIsLoading(true))

    axios.get(url)
      .then(res => {
        if (res.status !== 200) throw new Error("error in NPSFetchData action", res.statusText)

        dispatch(campsiteIsLoading(false))
        dispatch(NPSFetchSuccess(res.data.data))
      })
      .catch(() => dispatch(campsiteHasErrored(true)))
  }
}
