import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'

import loading from '../loading.gif'
import CampsiteListing from '../components/CampsiteListing'
import RequestModal from '../components/RequestModal'
import { toggleRequestModal } from '../actions/modal'

class CampsiteList extends Component {
  state = {
    campSites: [],
    isLoading: false,
    hasErrored: false,
  }

  componentDidMount() {
    this.fetchCampsiteInfo()
  }

  fetchCampsiteInfo() {
    const NPS_API_KEY = process.env.REACT_APP_NPS_API_KEY
    let url = `https://developer.nps.gov/api/v1/campgrounds?stateCode=CA&api_key=${ NPS_API_KEY }`
    axios.get(url)
      .then(res => this.setState({ campSites: res.data.data }))
      .catch(e => console.log("ERROR in fetchCampsiteInfo:", e))
  }

  render() {
    let campsites = this.state.campSites.map( campsite =>
      campsite.latLong ?
        <CampsiteListing
          key={ campsite.id }
          campsite={ campsite }
          toggleRequestModal={ this.props.toggleRequestModal }
        /> :
        null
    )
    console.log('props in campsiteList', this.props)
    return (
      <div style={{ position: 'relative' }}>
        { this.state.campSites.length === 0 ?
            <img src={ loading } alt="loading spinner" /> :
            campsites }
        { this.props.isModalOpen ?
            <RequestModal toggleRequestModal={ this.props.toggleRequestModal } /> :
            null }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    isModalOpen: state.modal.isModalOpen
  }
}

export default connect(mapStateToProps, { toggleRequestModal })(CampsiteList)
