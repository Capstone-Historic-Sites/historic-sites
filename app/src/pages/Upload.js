import React from 'react'
import { NavBar } from '../shared/components/NavBar'
import { ProfileSidebar } from '../shared/components/ProfileSidebar'
import Button from 'react-bootstrap/Button'

export const Upload = () => {
  return (
    <>
      <NavBar />
      <div className="grid-container">
        <div>
          <ProfileSidebar />
        </div>
        <div className="container py-5">
          <h2 className="text-left">Upload Historic Site</h2>
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
            <div className="d-flex justify-content-between">
              <div className="mb-3" align="left">
                <Button variant="primary" size="md">
                  Select Photos
                </Button>{' '}
              </div>
              <div className="mb-3" align="right">
                <Button variant="primary" size="md">
                  Upload
                </Button>{' '}
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}