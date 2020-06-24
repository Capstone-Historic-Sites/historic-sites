import React from 'react'
import { HistoricSiteImages } from './HistoricSiteImages'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function HistoricSiteProp (props) {
  const {historicSite, images, tags} = props

  return (
    <>
      <div className="row py-5">
        <HistoricSiteImages images={images} />
        <div className="col-md-6">
          <h1>{historicSite.historicSiteName}</h1>
          <div className="d-flex pb-3 flex-wrap">
            {tags.map(tag => <p className="tag">{tag.tagName}</p>)}
          </div>
          <p>
            {historicSite.historicSiteMunicipality}, {historicSite.historicSiteState}<br />
            <strong>{historicSite.historicSiteDate}</strong> <br />
            {historicSite.historicSiteCost}
          </p>
          <p>
            <div dangerouslySetInnerHTML={{__html: historicSite.historicSiteDescription}} />
          </p>
          <p>
            <FontAwesomeIcon icon="plus-circle" /> <strong>Add to Travel List</strong>
          </p>
        </div>
      </div>
    </>
  )
}