import React, { Component } from 'react'
import { connect } from 'react-redux'

import loading from '../loading.gif'
import CampsiteListing from '../components/CampsiteListing'
import RequestModal from '../components/RequestModal'
import { toggleRequestModal } from '../actions/modal'
import { NPSFetchData } from '../actions/campsites'

class CampsiteList extends Component {
  componentDidMount() {
    const NPS_API_KEY = process.env.REACT_APP_NPS_API_KEY
    let url = `https://developer.nps.gov/api/v1/campgrounds?stateCode=CA&api_key=${ NPS_API_KEY }`
    this.props.NPSFetchData(url)
  }

  render() {
    let campsites = this.props.campsites.map( campsite =>
      campsite.latLong ?
        <CampsiteListing
          key={ campsite.id }
          campsite={ campsite }
          toggleRequestModal={ this.props.toggleRequestModal }
        /> :
        null
    )

    return (
      <div style={{ position: 'relative' }}>
        { this.props.campsiteHasErrored ?
          <p>Sorry! There was an error loading campsite data</p> :
          null
        }
        { this.props.campsiteIsLoading ?
          <img src={ loading } alt="loading spinner" /> :
          campsites
        }
        { this.props.isModalOpen ?
          <RequestModal toggleRequestModal={ this.props.toggleRequestModal } /> :
          null
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    isModalOpen: state.modal.isModalOpen,
    campsiteHasErrored: state.campsiteHasErrored,
    campsiteIsLoading: state.campsiteIsLoading,
    campsites: state.NPSFetchSuccess,
  }
}


export default connect(mapStateToProps, {
  toggleRequestModal,
  NPSFetchData,
})(CampsiteList)
