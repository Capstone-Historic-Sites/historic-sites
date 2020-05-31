import React from 'react'
import { NavBar } from '../shared/components/NavBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const SearchResults = () => {
  return (
    <>
      <NavBar />
      <div className="container" style={{paddingTop: '1.5rem' }}>

        <div className="row">
          <div className="col" >
            <input className="form-control" type="text" placeholder="Search" aria-label="Search" />
          </div>
        </div>

        <div className="row pt-2">
          <div className="col pl-4" style={{fontSize: '1.1rem'}}>
            <FontAwesomeIcon icon="list" />
            <p className="d-inline-block pl-2">List View</p>
          </div>
          <div className="col d-flex justify-content-end mr-3" style={{fontSize: '1.1rem'}}>
            <FontAwesomeIcon icon="map-marker-alt" className="mt-1"/>
            <p className="d-inline-block ml-1">Map View</p>
          </div>
        </div>
      </div>

      <div className="container"><hr/></div>

      <div className="container">
        <div className="row mb-3">
          <div className="col-lg-6">

          </div>
          <div className="col-lg-6">
            <h2>Site Name</h2>
            <p>The idea, Priceonomics informs us, is to force people to look at the layout and font, not read the words. Also, “nobody would mistake it for their native language,” therefore Lorem Ipsum is “less likely than other filler text to be mistaken for final copy and published by accident.” If you’ve done any web design, you’ve probably seen it, looking something like this</p>
            <FontAwesomeIcon icon="plus-circle" /> <p className="d-inline-block">Add Site</p>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-lg-6">

          </div>
          <div className="col-lg-6">
            <h2>Site Name</h2>
            <p>The idea, Priceonomics informs us, is to force people to look at the layout and font, not read the words. Also, “nobody would mistake it for their native language,” therefore Lorem Ipsum is “less likely than other filler text to be mistaken for final copy and published by accident.” If you’ve done any web design, you’ve probably seen it, looking something like this</p>
            <FontAwesomeIcon icon="plus-circle" /> <p className="d-inline-block">Add Site</p>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-lg-6">

          </div>
          <div className="col-lg-6">
            <h2>Site Name</h2>
            <p>The idea, Priceonomics informs us, is to force people to look at the layout and font, not read the words. Also, “nobody would mistake it for their native language,” therefore Lorem Ipsum is “less likely than other filler text to be mistaken for final copy and published by accident.” If you’ve done any web design, you’ve probably seen it, looking something like this</p>
            <FontAwesomeIcon icon="plus-circle" /> <p className="d-inline-block">Add Site</p>
          </div>
        </div>
      </div>
    </>
  )
}