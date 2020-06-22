import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export function HistoricSiteProp (props) {
  const {historicSiteProp} = props
  return (
    <>
      <div className="row py-5">
        <div className="col-md-5">
          <img className="w-100" src="http://placekitten.com/700/700" alt="Historic Site Main Image"/>
          <div className="py-3 text-center">
            <img className="w-25 px-1" src="http://placekitten.com/200/200" alt="Historic Site Thumbnail 1"/>
            <img className="w-25 px-1" src="http://placekitten.com/200/200" alt="Historic Site Thumbnail 2"/>
            <img className="w-25 px-1" src="http://placekitten.com/200/200" alt="Historic Site Thumbnail 3"/>
          </div>
        </div>
        <div className="col-md-7">
          <h1>{historicSiteProp.historicSiteName}</h1>
          <div className="d-flex py-3">
            <p className="tag">Tag Name 1</p>
            <p className="tag">Tag Name 2</p>
          </div>
          <p>
            {historicSiteProp.historicSiteDate} <br />
            {historicSiteProp.historicSiteMunicipality}, {historicSiteProp.historicSiteState}<br />
            {historicSiteProp.historicSiteCost}
          </p>
          <p>{historicSiteProp.historicSiteDescription}</p>
          <p>
            <FontAwesomeIcon icon="plus-circle" /> <strong>Add to Travel List</strong>
          </p>
        </div>
      </div>
    </>
  )
}