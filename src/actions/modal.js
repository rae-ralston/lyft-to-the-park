import { TOGGLE_REQUEST_MODAL } from '../constants'

export function toggleRequestModal(bool) {
  return {
    type: TOGGLE_REQUEST_MODAL,
    isModalOpen: bool,
  }
}
