import React from 'react'
import { NavBar } from './shared/components/NavBar'
import { ProfileSidebar } from './shared/components/ProfileSidebar'
import Button from 'react-bootstrap/Button'
import * as Yup from 'yup'
import { httpConfig } from '../utils/http-config'
import { Formik } from 'formik'

export const Upload = () => {

  const validator = Yup.object().shape({
    historicSiteDate: Yup.string()
      .required('Historic site date is required')
      .max(10, 'Please provide a date or date range no longer than 10 characters'),
    historicSiteDescription: Yup.string()
      .required('Historic site description is required')
      .max(600, 'Please provide a description shorter than 600 characters'),
    historicSiteMunicipality: Yup.string()
      .required('Historic site municipality is required')
      .max(36, 'Please provide a city and/or municipality no longer than 36 characters'),
    historicSiteName: Yup.string()
      .required('Historic site name is required')
      .max(48, 'Historic site name must be shorter than 48 characters'),
    historicSiteState: Yup.string()
      .required('US state for historic site is required')
      .max(2, 'Please provide the two letter abbreviation for the state'),
  })

  const historicSite = {
    historicSiteCost: '',
    historicSiteDate: '',
    historicSiteDescription: '',
    historicSiteName: '',
    historicSiteState: '',
    historicSiteMunicipality: '',
  }

  const uploadHistoricSites = (values, {resetForm, setStatus}) => {
    httpConfig.post("/apis/historic-site", values).then(reply => {
      let {message, type} = reply
      if (reply.status === 200) {
        resetForm()
      }
      setStatus({message, type})
    })
  }

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
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput"
                placeholder="Example input"/>
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