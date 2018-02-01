import React, { Component } from 'react'
import axios from 'axios'
// import lyft from 'node-lyft';
import loading from './loading.gif'
require('dotenv').config()

const NPS_API_KEY = process.env.REACT_APP_NPS_API_KEY
// let defaultClient = lyft.ApiClient.instance;



export default class CampsiteList extends Component {
  state = {
    campSites: []
  }

  componentDidMount() {
    this.fetchCampsiteInfo()

  }

  handleSubmit(event) {
    event.preventDefault()
    //write check value function... does api fail with wrong entry?
    //write submit value function...
    this.fetchCampsiteInfo()
  }

  fetchCampsiteInfo() {
    let url = `https://developer.nps.gov/api/v1/campgrounds?stateCode=CA&api_key=${NPS_API_KEY}`
    axios.get(url)
      .then(res => {
        // console.log(res.data.data)
        this.setState({campSites: res.data.data})
      })
      .catch(e => console.log("ERROR:", e))
  }

  render() {
    let campsites = this.state.campSites.map( campsite => {
      console.log(campsite)
      if (!campsite.latLong) {
        return ""
      }
      return <h3 key={campsite.id}>{campsite.name}</h3>
    })
    return (
      <div>
        {
          this.state.campSites.length === 0 ?
            <img src={loading} alt="loading spinner" /> :
            campsites
        }
      </div>
    )
  }
}
