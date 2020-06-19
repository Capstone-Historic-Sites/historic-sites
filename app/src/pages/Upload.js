import React from 'react'
import { NavBar } from '../shared/components/NavBar'
import { ProfileSidebar } from '../shared/components/ProfileSidebar'
import Button from 'react-bootstrap/Button'

export const Upload = () => {

  window.onload = () => {
    document.getElementById('upload').style.background = '#6a85a0'
    document.getElementById('upload-caret').style.display = 'block'
  }

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
            <div className="form-groups, d-inline-block, form-inline">
              <div className="w-50">
                <label htmlFor="formGroupExampleInput2" className="justify-content-start">City</label>
                <input type="text" className="form-control w-100" id="formGroupExampleInput2" placeholder="Another input"/>
              </div>
              <div className="w-50">
                <label htmlFor="formGroupExampleInput2" className="justify-content-start">State</label>
                <input type="text" className="form-control w-100" id="formGroupExampleInput2" placeholder="Another input"/>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="formGroupExampleInput2">Description</label>
              <textarea className="form-control" id="formGroupExampleInput3" placeholder="Another input"/>
            </div>
            <div className="form-group, form-inline">
              <div className="form-group w-50">
                <label htmlFor="formGroupExampleInput2" className="justify-content-start">Historic Date</label>
                <input type="text" className="form-control w-100" id="formGroupExampleInput3" placeholder="Another input"/>
              </div>
              <div className="form-check">
                <label htmlFor="defaultCheck1" className="mr-2 ml-3">Free</label>
                <input  type="checkbox" className="form-check-input" id="defaultCheck1" value="" />
                <label htmlFor="defaultCheck1" className="mr-2 ml-3">Paid</label>
                <input  type="checkbox" className="form-check-input" id="defaultCheck1" value="" />
              </div>
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