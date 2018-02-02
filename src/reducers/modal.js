import { TOGGLE_REQUEST_MODAL } from '../constants'

export default function modal (state = false, action) {
  switch (action.type) {
    case TOGGLE_REQUEST_MODAL:
      return action.isModalOpen

    default:
      return state
  }
}
