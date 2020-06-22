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
    historicSiteMunicipality: '',
    historicSiteName: '',
    historicSiteState: ''
  }

  const uploadHistoricSite = (values, {resetForm, setStatus}) => {
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
          <Formik onSubmit={uploadHistoricSite} initialValues={historicSite} validationSchema={validator}>
            {(props) => {
              const {
                status,
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                handleReset
              } = props
              return (
                <>
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="name">Name of Historic Site</label>
                      <input
                        className="form-control"
                        id="name"
                        name="historicSiteName"
                        type="text"
                        placeholder="Name of historic site"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.historicSiteName}
                      />
                      {errors.historicSiteName && touched.historicSiteName && (
                        <div className="alert alert-danger">{errors.historicSiteName}</div>)}
                    </div>
                    <div className="form-groups, d-inline-block, form-inline">
                      <div className="w-50">
                        <label htmlFor="municipality" className="justify-content-start">City/Municipality</label>
                        <input
                          className="form-control w-100"
                          id="municipality"
                          name="historicSiteMunicipality"
                          type="text"
                          placeholder="City or municipality for historic site"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.historicSiteMunicipality}
                        />
                        {errors.historicSiteMunicipality && touched.historicSiteMunicipality && (
                          <div className="alert alert-danger">{errors.historicSiteMunicipality}</div>)}
                      </div>
                      <div className="w-50">
                        <label htmlFor="state" className="justify-content-start">US State</label>
                        <input
                          className="form-control w-100"
                          id="state"
                          name="historicSiteMunicipality"
                          type="text"
                          placeholder="Two letter abbreviation for US state"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.historicSiteState}
                        />
                        {errors.historicSiteState && touched.historicSiteState && (
                          <div className="alert alert-danger">{errors.historicSiteState}</div>)}
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="formGroupExampleInput2">Description</label>
                      <textarea className="form-control" id="formGroupExampleInput3" placeholder="Another input"/>
                    </div>
                    <div className="form-group, form-inline">
                      <div className="form-group w-50">
                        <label htmlFor="formGroupExampleInput2" className="justify-content-start">Historic Date</label>
                        <input type="text" className="form-control w-100" id="formGroupExampleInput3"
                               placeholder="Another input"/>
                      </div>
                      <div className="form-check">
                        <label htmlFor="defaultCheck1" className="mr-2 ml-3">Free</label>
                        <input type="checkbox" className="form-check-input" id="defaultCheck1" value=""/>
                        <label htmlFor="defaultCheck1" className="mr-2 ml-3">Paid</label>
                        <input type="checkbox" className="form-check-input" id="defaultCheck1" value=""/>
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
                </>
              )
            }}
          </Formik>
        </div>
      </div>
    </>
  )
}