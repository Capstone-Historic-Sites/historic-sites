import React from 'react'
import { NavBar } from './shared/components/NavBar'
import Carousel from 'react-bootstrap/Carousel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const SearchResults = () => {

  const switchToListView = () => {
    document.getElementById('map-view').style.display = 'none'
    document.getElementById('list-view').style.display = 'block'
  }
  const switchToMapView = () => {
    document.getElementById('list-view').style.display = 'none'
    document.getElementById('map-view').style.display = 'block'
  }

  const openSidebar = () => {
      document.getElementById('sidebar').style.marginLeft = '0'
  }
  const closeSidebar = () => {
    document.getElementById('sidebar').style.marginLeft = '-300px'
  }

  return (
    <>
      < NavBar />

      <div className="grid-container">

        <div className='container'>
          <div className="sidebar p-4" id="sidebar" style={{background: '#6f7565'}}>
            <div className="d-flex justify-content-between">
              <h5 className="d-inline-block">Filter By Tag</h5>
              <FontAwesomeIcon className="d-md-none" icon="arrow-left" onClick={closeSidebar} />
            </div>
            <hr/>
            <div className='ml-2' >
              <label><input type="checkbox" value='1'/> Tag 1 </label>
            </div>
            <div className='ml-2'>
              <label><input type="checkbox" value='2'/> Tag 2 </label>
            </div>
            <div className='ml-2'>
              <label><input type="checkbox" value='3'/> Tag 3 </label>
            </div>
            <div className='ml-2'>
              <label><input type="checkbox" value='4'/> Tag 4 </label>
            </div>
            <div className='ml-2'>
              <label><input type="checkbox" value='5'/> Tag 5 </label>
            </div>
            <div className='ml-2'>
              <label><input type="checkbox" value='6'/> Tag 6 </label>
            </div>
          </div>
        </div>

        <div className="container pt-5">

          {/*Search Bar*/}
          <div className="row">
            <div className="col" >
              <div className="position-relative">
                <FontAwesomeIcon icon="search" className="search-icon"/>
                <input className="form-control search-input" type="text" placeholder="Search" aria-label="Search" />
                <div className="filter-toggle d-md-none" onClick={openSidebar}>Filter</div>
              </div>
            </div>
          </div>
          {/*Search Bar*/}

          {/*Map View & List View*/}
          <div className="row pt-3">
            <div className="col d-flex pl-4">
              <div className="list-view" onClick={switchToListView}>
                <FontAwesomeIcon icon="list" />
                <p className="d-inline-block pl-2">List View</p>
              </div>
            </div>
            <div className="col d-flex justify-content-end mr-3">
              <div className="map-view" onClick={switchToMapView}>
                <FontAwesomeIcon icon="map-marker-alt" className="mt-1"/>
                <p className="d-inline-block ml-1">Map View</p>
              </div>
            </div>
          </div>
          {/*/Map View & List View*/}
        </div>

        <div></div>

        {/*Sites Container*/}
        <div className="container py-4" id="list-view">
          {/*First Site*/}
          <div className="row">
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
            <div className="col-lg-7 p-4">
              <h2>Site Name</h2>
              <p>The idea, Priceonomics informs us, is to force people to look at the layout and font, not read the words. Also, “nobody would mistake it for their native language,” therefore Lorem Ipsum is “less likely than other filler text to be mistaken for final copy and published by accident.” If you’ve done any web design, you’ve probably seen it, looking something like this</p>
              <FontAwesomeIcon icon="plus-circle" /> <p className="d-inline-block">Add Site</p>
            </div>
          </div>
          {/*/First Site*/}
          <hr className="my-4"/>
          {/*Second Site*/}
          <div className="row">
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
            <div className="col-lg-7 p-4">
              <h2>Site Name</h2>
              <p>The idea, Priceonomics informs us, is to force people to look at the layout and font, not read the words. Also, “nobody would mistake it for their native language,” therefore Lorem Ipsum is “less likely than other filler text to be mistaken for final copy and published by accident.” If you’ve done any web design, you’ve probably seen it, looking something like this</p>
              <FontAwesomeIcon icon="plus-circle" /> <p className="d-inline-block">Add Site</p>
            </div>
          </div>
          {/*/Second Site*/}
          <hr className="my-4"/>
          {/*Third Site*/}
          <div className="row">
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
            <div className="col-lg-7 p-4">
              <h2>Site Name</h2>
              <p>The idea, Priceonomics informs us, is to force people to look at the layout and font, not read the words. Also, “nobody would mistake it for their native language,” therefore Lorem Ipsum is “less likely than other filler text to be mistaken for final copy and published by accident.” If you’ve done any web design, you’ve probably seen it, looking something like this</p>
              <FontAwesomeIcon icon="plus-circle" /> <p className="d-inline-block">Add Site</p>
            </div>
          </div>
          {/*/Third Site*/}
        </div>

        <div className="container py-4" id="map-view" style={{display: 'none'}}>
          <h1>Map View</h1>
        </div>
      </div>
    </>
  )
}