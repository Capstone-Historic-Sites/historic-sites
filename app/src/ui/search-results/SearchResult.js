import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {useHistory} from 'react-router'

export function SearchResult (props) {
  const {historicSite, images} = props

  const history = useHistory()

  const handleRedirect = () => {
    history.push(`/historic-site/${historicSite.historicSiteId}`)
  }

  function getHistoricSiteImages (images) {
    let historicSiteImages = []
    images.forEach(image => {
      if (image.imageHistoricSiteId === historicSite.historicSiteId) {
        historicSiteImages.push(`
              <img
                class="d-block w-100"
                src=${image.imagePath}
                alt=${image.imageName}
              />
            `
        )
      }
    })
    return historicSiteImages
  }

  return (
    <>
      <div className="row py-3">
        <div className="col-lg-5">
          <Carousel interval={null}>
            {getHistoricSiteImages(images).map(image => <div className="carousel-item" dangerouslySetInnerHTML={{__html: image}} />)}
          </Carousel>
        </div>
        <div className="col-lg-7 px-4">
          <h2 className="historic-link" onClick={handleRedirect}>{historicSite.historicSiteName}</h2>
          <p>{historicSite.historicSiteMunicipality}, {historicSite.historicSiteState}</p>
          <p>
            <div dangerouslySetInnerHTML={{__html: historicSite.historicSiteDescription}} />
          </p>
          <p className="d-inline-block historic-link" onClick={handleRedirect} style={{marginRight: '10px'}}>See Details</p>
          <FontAwesomeIcon icon="plus-circle" /> <p className="d-inline-block">Add Site</p>
        </div>
      </div>
    </>
  )
}