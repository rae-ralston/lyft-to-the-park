import React, { Component } from 'react'
import CampsiteList from './CampsiteList'

export default class Campsites extends Component {
  componentDidMount() {
    const NPS_API_KEY = process.env.REACT_APP_NPS_API_KEY
    let url = `https://developer.nps.gov/api/v1/campgrounds?stateCode=CA&api_key=${ NPS_API_KEY }`
    this.props.NPSFetchData(url)
  }

  render() {
    return <CampsiteList {...this.props} />
  }
}
