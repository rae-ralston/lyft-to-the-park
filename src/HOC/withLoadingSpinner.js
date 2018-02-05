import React, { Component } from 'react'
import '../styles/LoadingSpinnerHOC.css'

export default function(ComposedComponent) {
  class withLoadingSpinner extends Component {
    render() {
      return this.props.campsiteIsLoading ?
        <div className="spinner spinner-pulse"></div> :
        <ComposedComponent { ...this.props } />
    }
  }

  return withLoadingSpinner
}
