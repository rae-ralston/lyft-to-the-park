import React, { Component } from 'react'
import axios from 'axios'
// import lyft from 'node-lyft';
import loading from './loading.gif'
import './CampsiteList.css'
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
        this.setState({campSites: res.data.data})
      })
      .catch(e => console.log("ERROR in fetchCampsiteInfo:", e))
  }

  fetchLyftInfo() {
    let url = `https://developer.nps.gov/api/v1/campgrounds?stateCode=CA&api_key=${NPS_API_KEY}`
    axios.get(url)
      .then(res => {
        this.setState({campSites: res.data.data})
      })
      .catch(e => console.log("ERROR in fetchCampsiteInfo:", e))
  }

  render() {
    let campsites = this.state.campSites.map( campsite => {
      console.log(campsite)
      if (!campsite.latLong) {
        return ""
      }
      return (
        <div className="campsite" key={campsite.id}>
          <div className="campsite__wordsCol">
            <h3 className="campsite__title" >{campsite.name}</h3>
            <p className="campsite__description">{campsite.description}</p>
          </div>
          <div className="campsite__actCol">
            <button className="campsite__btn">catch a lyft</button>
          </div>
        </div>)
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
