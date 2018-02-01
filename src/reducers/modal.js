import { TOGGLE_REQUEST_MODAL } from '../constants'
import defaultModalState from '../data/defaultModalState'

export default function modal (state = defaultModalState, action) {
  // console.log('in modal reducer', action)

  switch (action.type) {

    case TOGGLE_REQUEST_MODAL:
      // console.log('in TOGGLE_REQUEST_MODAL')
      return { ...state, isModalOpen: !state.isModalOpen }

    default:
      return state
  }
}
