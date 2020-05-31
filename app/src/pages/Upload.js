import React from 'react'
import { NavBar } from '../shared/components/NavBar'
import { ProfileSidebar } from '../shared/components/ProfileSidebar'

export const Upload = () => {
  return (
    <>
      <NavBar />
      <ProfileSidebar />
      <h1>Upload Page</h1>
      <h2 className="text-left"><strong>Upload Historic Sites</strong></h2>
      <form>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput">Name of Historic Site</label>
          <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input"/>
        </div>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput2">Street Address</label>
          <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Another input"/>
        </div>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput2">Description</label>
          <input type="textarea" className="form-control" id="formGroupExampleInput3" placeholder="Another input"/>
        </div>
      </form>
    </>
  )
}