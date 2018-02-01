import React, { Component } from 'react'
import './RequestModal.css'

export default class RequestModal extends Component {
  render() {
    return (
      <div className="modal" onClick={() => this.props.toggleRequestModal()}>
        X
      </div>
    )
  }
}
