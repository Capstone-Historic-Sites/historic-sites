import React from 'react'
import { NavBar } from '../shared/components/NavBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const HistoricSite = () => {
  return (
    <>
      <NavBar/>
      <div className="container my-4">
        <div className="row py-4">
          <div className="col-md-5">
            <img className="w-100" src="http://placekitten.com/700/700" alt="Historic Site Main Image"/>
            <div className="py-3 text-center">
              <img className="w-25 px-1" src="http://placekitten.com/200/200" alt="Historic Site Thumbnail 1"/>
              <img className="w-25 px-1" src="http://placekitten.com/200/200" alt="Historic Site Thumbnail 2"/>
              <img className="w-25 px-1" src="http://placekitten.com/200/200" alt="Historic Site Thumbnail 3"/>
            </div>
          </div>
          <div className="col-md-7">
            <h1>Historic Site Name</h1>
            <div className="d-flex py-3">
              <p className="tag">Tag Name 1</p>
              <p className="tag">Tag Name 2</p>
            </div>
            <p>
              Dated YYYY<br />
              Albuquerque, NM<br />
              Free To Visit
            </p>
            <p>
              <strong>Description</strong><br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              <FontAwesomeIcon icon="plus-circle" /> <strong>Add to Travel List</strong>
            </p>
          </div>
        </div>
        <div className="row pt-5">
            <h2>Related Sites</h2>
        </div>
        <div className="row py-2">
          <div className="col-md-3 col-6 text-center">
            <img className="w-100" src="http://placekitten.com/600/600" alt="Relate Sited 1"/>
            <h5 className="my-3">Historic Site Name</h5>
          </div>
          <div className="col-md-3 col-6 text-center">
            <img className="w-100" src="http://placekitten.com/800/800" alt="Relate Sited 1"/>
            <h5 className="my-3">Historic Site Name</h5>
          </div>
          <div className="col-md-3 col-6 text-center">
            <img className="w-100" src="http://placekitten.com/900/900" alt="Relate Sited 1"/>
            <h5 className="my-3">Historic Site Name</h5>
          </div>
          <div className="col-md-3 col-6 text-center">
            <img className="w-100" src="http://placekitten.com/1000/1000" alt="Relate Sited 1"/>
            <h5 className="my-3">Historic Site Name</h5>
          </div>
        </div>
      </div>
    </>
  )
}