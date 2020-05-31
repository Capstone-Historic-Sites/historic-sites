import React from 'react'
import { NavBar } from '../shared/components/NavBar'
import { ProfileSidebar } from '../shared/components/ProfileSidebar'

export const Upload = () => {
  return (
    <>
      <NavBar />
      <ProfileSidebar />
      <h1>Upload Page</h1>
      <h2 className="text-center"><strong>Upload Historic Sites</strong></h2>
      <form>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput">Example label</label>
          <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input"/>
        </div>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput2">Another label</label>
          <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Another input"/>
        </div>
      </form>
    </>
  )
}