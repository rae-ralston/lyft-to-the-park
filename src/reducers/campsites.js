import { INIT_NPS_CAMPSITES } from '../constants'

export default function campsites(state = [], action) {
  // console.log('in campsites reducer')
  switch (action.type) {
    case INIT_NPS_CAMPSITES:
      console.log("inside init campistes reducer")
      return state
    default:
      return state
  }
}
