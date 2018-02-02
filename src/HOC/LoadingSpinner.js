import React, { Component } from 'react'
import '../styles/LoadingSpinnerHOC.css'

export default function(ComposedComponent) {
  class LoadingSpinner extends Component {
    render() {
      return this.props.campsiteIsLoading ?
        <div className="sk-spinner sk-spinner-pulse"></div> :
        <ComposedComponent { ...this.props } />
    }
  }

  return LoadingSpinner
}
