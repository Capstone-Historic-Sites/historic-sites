import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useHistory } from 'react-router'

export const TravelListSite = (props) => {
  const {historicSite, images} = props

  const history = useHistory()

  const handleRedirect = () => {
    history.push(`/historic-site/${historicSite.historicSiteId}`)
  }

  function getHistoricSiteImages () {
    let historicSiteImages = []
    images.map(image => {
      if (image.imageHistoricSiteId === historicSite.historicSiteId) {
        historicSiteImages.push(`<img class="w-100" src="${image.imagePath}" alt="${image.imageName}" />`)
      }
    })
    return historicSiteImages
  }

  return (
    <>
      <div className={`row align-items-center py-3 order-${historicSite.travelListRank}`}>
        <div className="col-lg-5 d-flex align-items-center position-relative">
          <h2 className="travel-rank">{historicSite.travelListRank}</h2>
          {getHistoricSiteImages().map((image, index) => {
            if (index === 0) {
              return <div dangerouslySetInnerHTML={{__html: image}} />
            }
          })}
        </div>
        <div className="col-lg-7 d-flex align-items-center">
          <div className="col-11">
            <h2 className="historic-link" onClick={handleRedirect}>{historicSite.historicSiteName}</h2>
            <p>{historicSite.historicSiteMunicipality}, {historicSite.historicSiteState}</p>
            <p>
              <div dangerouslySetInnerHTML={{__html: historicSite.historicSiteDescription}} />
            </p>
          </div>
          <div className="col-1">
            <FontAwesomeIcon icon="bars"/>
          </div>
        </div>
      </div>
    </>
 )
}