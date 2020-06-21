import React from 'react'
import { NavBar } from './shared/components/NavBar'
import { ProfileSidebar } from './shared/components/ProfileSidebar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export const TravelList = () => {

  window.onload = () => {
    document.getElementById('travel-list').style.background = '#6a85a0'
    document.getElementById('travel-caret').style.display = 'block'
  }

  return (
    <>
      <NavBar />
      <div className="grid-container">
        <div>
          <ProfileSidebar />
        </div>
        <div className="container py-5 text-center">
          <h2>Travel List</h2>

  <div className="row align-items-center py-3em">
    <div className="col-1"><h3>1</h3></div>
  <div className="col-4"><img className="d-inline-block" src="http://placekitten.com/300/300" alt="Thumbnail image"/></div>

    <div className="col-6">Vivamus interdum non lacus sed aliquet. Ut facilisis eu velit condimentum commodo. Fusce posuere tempor
  facilisis. Quisque sed ultricies mauris, eu accumsan mi. Cras dolor elit, semper nec ipsum eu, tincidunt blandit
  ante. Praesent a convallis arcu, ac blandit arcu. Vivamus ac lobortis orci.</div>

  <div className="col-1"><FontAwesomeIcon icon="bars"/></div>
    </div>



    <div className="row align-items-center py-3em">
    <div className="col-1"><h3>2</h3></div>
  <div className="col-4"><img className="d-inline-block" src="http://placekitten.com/300/300" alt="Thumbnail image"/></div>

    <div className="col-6">Aliquam id libero nisl. In hac habitasse platea dictumst. Phasellus felis diam, placerat et maximus at, faucibus
  eget odio. Phasellus lacinia finibus mauris et vehicula. Fusce blandit eros vitae massa maximus malesuada. Lorem
  ipsum dolor sit amet, consectetur adipiscing elit. Nam tempor in quam hendrerit condimentum. Vestibulum feugiat
  commodo gravida. Maecenas et laoreet urna.</div>

  <div className="col-1"><FontAwesomeIcon icon="bars"/></div>
    </div>



    <div className="row align-items-center py-3em">
    <div className="col-1"><h3>3</h3></div>
  <div className="col-4"><img className="d-inline-block" src="http://placekitten.com/300/300" alt="Thumbnail image"/></div>


    <div className="col-6">Mauris id molestie mauris. Integer lobortis quis ipsum egestas gravida. Integer facilisis velit quam, nec
          vulputate sapien accumsan in. Praesent non libero posuere, dignissim nisl sed, rutrum orci.</div>

  <div className="col-1"><FontAwesomeIcon icon="bars"/></div>
    </div>

          <button type="button"
  className="btn btn-primary">Add Site</button>

        </div>
      </div>
    </>
  )
}

