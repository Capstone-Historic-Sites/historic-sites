import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export const TravelListSite = (props) => {
    const {historicSite} = props
    return (
      <>

<div className="row align-items-center py-3em">
    <div className="col-1"><h3>1</h3></div>
  <div className="col-4"><img className="d-inline-block" src="http://placekitten.com/300/300" alt="Thumbnail image"/></div>

    <div className="col-6"><h2>{historicSite.historicSiteName}</h2>
    <p>{historicSite.historicSiteMunicipality}, {historicSite.historicSiteState}</p>
  <p>{historicSite.historicSiteDescription}</p></div>

  <div className="col-1"><FontAwesomeIcon icon="bars"/>
    </div>
    </div>
  </>
 )
}
