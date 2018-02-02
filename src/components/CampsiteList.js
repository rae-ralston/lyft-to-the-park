import React from 'react'

import LoadingSpinner from '../HOC/LoadingSpinner'
import CampsiteListing from '../components/CampsiteListing'
import RequestModal from '../components/RequestModal'

function CampsiteList(props) {
  return (
    <div>
      {
        props.campsiteHasErrored ?
        <p>Sorry! There was an error loading campsite data</p> :
        null
      }
      {
        props.campsites.map( campsite => campsite.latLong ?
            <CampsiteListing
              key={ campsite.id }
              campsite={ campsite }
              toggleRequestModal={ props.toggleRequestModal }
            /> :
            null
        )
      }
      {
        props.isModalOpen ?
        <RequestModal toggleRequestModal={ props.toggleRequestModal } /> :
        null
      }
    </div>
  )

}

export default LoadingSpinner(CampsiteList)
