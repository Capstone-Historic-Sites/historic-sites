import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function SearchResult (props) {
  const {historicSite} = props
  return (
    <>
      <div className="row py-3">
        <div className="col-lg-5">
          <Carousel interval={null}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://images.pexels.com/photos/2835436/pexels-photo-2835436.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://images.pexels.com/photos/319882/pexels-photo-319882.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://images.pexels.com/photos/531321/pexels-photo-531321.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="col-lg-7 px-4">
          <h2>{historicSite.historicSiteName}</h2>
          <p>{historicSite.historicSiteMunicipality}, {historicSite.historicSiteState}</p>
          <p>{historicSite.historicSiteDescription}</p>
          <FontAwesomeIcon icon="plus-circle" /> <p className="d-inline-block">Add Site</p>
        </div>
      </div>
    </>
  )
}