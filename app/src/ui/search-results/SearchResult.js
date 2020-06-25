import React, {useState} from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {useHistory} from 'react-router'
import { httpConfig } from '../../utils/http-config'

export function SearchResult (props) {
  const {historicSite, images} = props

  const [status, setStatus] = useState(null)

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

  function addToTravelList () {
    httpConfig.post('/apis/travel-list/', {travelListHistoricSiteId: historicSite.historicSiteId}).then(reply => {
      let {message, type} = reply
      setStatus({message, type})
    })
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
          <p className="d-inline-block blue-link" onClick={addToTravelList}>
            <FontAwesomeIcon icon="plus-circle" /> Add to Travel List
          </p>
          {status !== null && (<div className={status.type}>{status.message}</div>)}
        </div>
      </div>
    </>
  )
}