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
          <label htmlFor="exampleFormControlInput1">Email address</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
        </div>
      </form>
    </>
  )
}