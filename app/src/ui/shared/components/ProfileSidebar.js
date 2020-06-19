import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const ProfileSidebar = () => {
  return (
    <>
      <div className="sidebar p-4">
        <h5>Profile Name</h5>
        <h5>Organization</h5>
        <p className="my-4">emailaddress@gmail.com</p>
        <hr/>
        <a href="/travel-list">
          <div className="d-flex p-2 my-2 profile-select" id="travel-list">
            <FontAwesomeIcon icon="car" className="mt-1" />
            <h5 className="ml-2 m-0">Travel List</h5>
            <FontAwesomeIcon icon="caret-right" className="mt-1 ml-auto" id="travel-caret" style={{display: 'none'}} />
          </div>
        </a>
        <a href="#">
          <div className="d-flex p-2 my-2 profile-select" id="settings">
            <FontAwesomeIcon icon="cog" className="mt-1" />
            <h5 className="ml-2 m-0">Settings</h5>
            <FontAwesomeIcon icon="caret-right" className="mt-1 ml-auto" id="settings-caret" style={{display: 'none'}} />
          </div>
        </a>
        <a href="/upload">
          <div className="d-flex p-2 my-2 profile-select" id="upload">
            <FontAwesomeIcon icon="upload" className="mt-1" />
            <h5 className="ml-2 m-0">Upload Site</h5>
            <FontAwesomeIcon icon="caret-right" className="mt-1 ml-auto" id="upload-caret" style={{display: 'none'}} />
          </div>
        </a>
        <p className="position-absolute" style={{bottom: 0}}>Sign Out</p>
      </div>
    </>
  )
}