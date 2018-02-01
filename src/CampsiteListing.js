import React from 'react'
import './CampsiteListing.css'

const CampsiteListing = (props) => {
  const { campsite } = props
  return (
    <div className="campsite">
      <div className="campsite__wordsCol">
        <h3 className="campsite__title" >{campsite.name}</h3>
        <p className="campsite__description">{campsite.description}</p>
      </div>
      <div className="campsite__actCol">
        <button className="campsite__btn" onClick={() => props.toggleRequestModal()}>catch a lyft</button>
      </div>
    </div>
  )
}

export default CampsiteListing
