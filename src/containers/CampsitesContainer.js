import { connect } from 'react-redux'

import Campsites from '../components/Campsites'
import { toggleRequestModal } from '../actions/modal'
import { NPSFetchData } from '../actions/campsites'

function mapStateToProps(state) {
  return {
    isModalOpen: state.modal,
    campsiteHasErrored: state.campsiteHasErrored,
    campsiteIsLoading: state.campsiteIsLoading,
    campsites: state.NPSFetchSuccess,
  }
}

export default connect(mapStateToProps, {
  toggleRequestModal,
  NPSFetchData,
})(Campsites)
