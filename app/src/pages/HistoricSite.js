import React from 'react'
import { NavBar } from '../shared/components/NavBar'

export const HistoricSite = () => {
  return (
    <>
      <NavBar/>
      <div className="container my-4">
        <div className="row py-4">
          <div className="col-md-5">
            <img className="w-100" src="http://placekitten.com/500/500" alt="Historic Site Main Image"/>
            <div className="py-3 text-center">
              <img className="w-25 px-1" src="http://placekitten.com/200/200" alt="Historic Site Thumbnail 1"/>
              <img className="w-25 px-1" src="http://placekitten.com/200/200" alt="Historic Site Thumbnail 2"/>
              <img className="w-25 px-1" src="http://placekitten.com/200/200" alt="Historic Site Thumbnail 3"/>
            </div>
          </div>
          <div className="col-md-7">
            <h1>Historic Site Name</h1>
            <div className="d-flex">
              <h5 className="mr-3">Tag Name 1</h5>
              <h5 className="mr-3">Tag Name 2</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}