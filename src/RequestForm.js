import React, { Component } from 'react'
import axios from 'axios'
import { convertToURI } from './helpers'

export default class RequestForm extends Component {
  state = {
    errorMessage: "",
    address: "",
    city: "",
    zip: ""
  }

  fetchGoogleMapAPI = () => {
    let GOOGLE_MAPS_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY
    let { zip } = this.state
    let address = convertToURI(this.state.address)
    let city = convertToURI(this.state.city)
    let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${ address },${ city },ca,${ zip }&key=${ GOOGLE_MAPS_API_KEY }`

    return axios.get(url)
      .then(res => {
        console.log(res.data.results[0].geometry.location)
        return res.data.results[0].geometry.location
      })
  }

  handleChange = (event, type) => {
    this.setState({ [type]: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.fetchGoogleMapAPI()
      .then(location => this.props.getACar(location))
  }

  render() {
    return (
      <div>
        <span>{ this.state.errorMessage }</span>
        <form onSubmit={ (e) => this.handleSubmit(e) }>
          <input type="text" placeholder="address" onChange={ (e) => this.handleChange(e, 'address') } />
          <input type="text" placeholder="city" onChange={ (e) => this.handleChange(e, 'city') } />
          <input type="text" placeholder="zip" onChange={ (e) => this.handleChange(e, 'zip') } />
          <input type="submit"/>
        </form>
      </div>
    )
  }
}
