import React from 'react'
import { NavBar, } from '../shared/components/NavBar'
import Carousel from 'react-bootstrap/Carousel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export const SearchResults = () => {

  return (
    <>
      {/*NavBar*/}
      < NavBar />
      {/*/Navbar*/}

      <div className="grid-container">
          {/*ProfileSideBar*/}
        <div className='container'>
          <div className="profile-sidebar p-4" style={{height: '75rem', background: '#6f7565'}}>
            <h5>Filter By</h5>
            <hr/>
            <div className='ml-2' >
              <label><input type="checkbox" value='1'/> Tag 1 </label>
            </div>
            <div className='ml-2'>
              <label><input type="checkbox" value='1'/> Tag 2 </label>
            </div>
            <div className='ml-2'>
              <label><input type="checkbox" value='1'/> Tag 3 </label>
            </div>
            <div className='ml-2'>
              <label><input type="checkbox" value='1'/> Tag 4 </label>
            </div>
            <div className='ml-2'>
              <label><input type="checkbox" value='1'/> Tag 5 </label>
            </div>
            <div className='ml-2'>
              <label><input type="checkbox" value='1'/> Tag 6 </label>
            </div>
            <p className="position-absolute" style={{bottom: 0}}>Sign Out</p>
          </div>
        </div>
          {/*/ProfileSideBar*/}

        <div className="container" style={{paddingTop: '1.5rem' }}>

          {/*Search Bar*/}
          <div className="row">
            <div className="col" >
              <input className="form-control" type="text" placeholder="Search" aria-label="Search" />
            </div>
          </div>
          {/*/Search Bar*/}

          {/*Map View & List View*/}
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
          {/*/Map View & List View*/}
        </div>

        <div className="container"><hr/></div>

        {/*Sites Container*/}
        <div className="container">
          {/*First Site*/}
          <div className="row mb-3">
            <div className="col-lg-6">
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://images.pexels.com/photos/2835436/pexels-photo-2835436.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://images.pexels.com/photos/319882/pexels-photo-319882.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt="Third slide"
                  />

                  <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://images.pexels.com/photos/531321/pexels-photo-531321.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt="Third slide"
                  />

                  <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
            <div className="col-lg-6">
              <h2>Site Name</h2>
              <p>The idea, Priceonomics informs us, is to force people to look at the layout and font, not read the words. Also, “nobody would mistake it for their native language,” therefore Lorem Ipsum is “less likely than other filler text to be mistaken for final copy and published by accident.” If you’ve done any web design, you’ve probably seen it, looking something like this</p>
              <FontAwesomeIcon icon="plus-circle" /> <p className="d-inline-block">Add Site</p>
            </div>
          </div>
          {/*/First Site*/}
          <hr/>
          {/*Second Site*/}
          <div className="row mb-3">
            <div className="col-lg-6">
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://images.pexels.com/photos/2835436/pexels-photo-2835436.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://images.pexels.com/photos/319882/pexels-photo-319882.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt="Third slide"
                  />

                  <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://images.pexels.com/photos/531321/pexels-photo-531321.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt="Third slide"
                  />

                  <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
            <div className="col-lg-6">
              <h2>Site Name</h2>
              <p>The idea, Priceonomics informs us, is to force people to look at the layout and font, not read the words. Also, “nobody would mistake it for their native language,” therefore Lorem Ipsum is “less likely than other filler text to be mistaken for final copy and published by accident.” If you’ve done any web design, you’ve probably seen it, looking something like this</p>
              <FontAwesomeIcon icon="plus-circle" /> <p className="d-inline-block">Add Site</p>
            </div>
          </div>
          {/*/Second Site*/}
          <hr/>
          {/*Third Site*/}
          <div className="row mb-3">
            <div className="col-lg-6">
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://images.pexels.com/photos/2835436/pexels-photo-2835436.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://images.pexels.com/photos/319882/pexels-photo-319882.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt="Third slide"
                  />

                  <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://images.pexels.com/photos/531321/pexels-photo-531321.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt="Third slide"
                  />

                  <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
            <div className="col-lg-6">
              <h2>Site Name</h2>
              <p>The idea, Priceonomics informs us, is to force people to look at the layout and font, not read the words. Also, “nobody would mistake it for their native language,” therefore Lorem Ipsum is “less likely than other filler text to be mistaken for final copy and published by accident.” If you’ve done any web design, you’ve probably seen it, looking something like this</p>
              <FontAwesomeIcon icon="plus-circle" /> <p className="d-inline-block">Add Site</p>
            </div>
          </div>
          {/*/Third Site*/}
        </div>
      </div>
    </>
  )
}