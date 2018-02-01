import React, { Component } from 'react'
import axios from 'axios'
import lyft from 'node-lyft';

import loading from './loading.gif'
import CampsiteListing from './CampsiteListing'
import RequestModal from './RequestModal'

export default class CampsiteList extends Component {
  state = {
    campSites: [],
    isRequestModalOpen: false
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

  toggleRequestModal = () => {
    this.setState({ isRequestModalOpen: !this.state.isRequestModalOpen })
  }

  fetchLyftInfo(lat, lng) {
    const LYFT_ACCESS_TOKEN = process.env.REACT_APP_LYFT_ACCESS_TOKEN
    let defaultClient = lyft.ApiClient.instance;
    let userAuth = defaultClient.authentications['User Authentication'];
    userAuth.accessToken = LYFT_ACCESS_TOKEN;

    // TODO: MAKE SURE YOU'RE IN THE SANDBOX!
    let apiInstance = new lyft.UserApi();
    let request = new lyft.Ride('lyft', new lyft.Location(37.77663, -122.39227));
    request.destination = new lyft.Location(lat, lng);

    apiInstance.newRide(request).then((data) => {
      console.log('API called successfully. Returned data: ' + data);
    }, (error) => {
      console.error(error);
    });
  }

  render() {
    let campsites = this.state.campSites.map( campsite =>
      campsite.latLong ?
        <CampsiteListing
          key={ campsite.id }
          campsite={ campsite }
          toggleRequestModal={ this.toggleRequestModal }
        /> :
        null
    )
    
    return (
      <div style={{ position: 'relative' }}>
        { this.state.campSites.length === 0 ?
            <img src={ loading } alt="loading spinner" /> :
            campsites }
        { this.state.isRequestModalOpen ?
            <RequestModal toggleRequestModal={ this.toggleRequestModal } /> :
            null }
      </div>
    )
  }
}
