import React, { Component } from 'react'
import axios from 'axios'

function convertToURI(str) {
  return str.split(" ").join("+")
}

export default class RequestForm extends Component {
  state = {
    errorMessage: "",
    address: "",
    city: "",
    zip: ""
  }

  fetchGoogleMapAPI = () => {
    let { zip } = this.state
    let address = convertToURI(this.state.address)
    let city = convertToURI(this.state.city)
    let GOOGLE_MAPS_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY
    let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address},${city},ca,${zip}&key=${GOOGLE_MAPS_API_KEY}`
    // let url = `https://maps.googleapis.com/maps/api/geocode/json?address=1788%209th%20St%20oakland%20ca%2094607&key=${GOOGLE_MAPS_API_KEY}`
    axios.get(url)
      .then(res => {
        console.log(res.data)
        return res.data
      })
  }

  // checkIfInCA = () => {
  //   let url = `http://maps.googleapis.com/maps/api/geocode/json?address=${this.state.zip}&sensor=true`
  //   axios.get(url)
  //     .then(res => console.log(res))
  // }

  handleChange = (event, type) => {
    this.setState({ [type]: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    // console.log(this.state)
    console.log('SUCH SUBMIT')
    this.fetchGoogleMapAPI()
  }

  render() {
    return (
      <div>
        <span>{ this.state.errorMessage }</span>
        <form onSubmit={ (e) => this.handleSubmit(e) }>
          <input type="text" placeholder="address" onChange={ (e) => this.handleChange(e, 'address')} />
          <input type="text" placeholder="city" onChange={ (e) => this.handleChange(e, 'city')} />
          <input type="text" placeholder="zip" onChange={ (e) => this.handleChange(e, 'zip')} />
          <input type="submit"/>
        </form>
      </div>
    )
  }
}


// {
//    "results" : [],
//    "status" : "ZERO_RESULTS"
// }
