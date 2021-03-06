import React from 'react'
import { NavBar } from '../shared/components/NavBar'
import { ProfileSidebar } from '../shared/components/ProfileSidebar'
import { ImageDropZone } from './ImageDropZone'
import Button from 'react-bootstrap/Button'
import { httpConfig } from '../../utils/http-config'
import { Formik } from 'formik'
import * as Yup from 'yup'

export const Upload = () => {

  const validator = Yup.object().shape({
    historicSiteCost: Yup.string()
      .required('Historic site cost is required'),
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
    imagePath: Yup.mixed()
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
    httpConfig.post('/apis/historic-site', values).then(reply => {
      let {data, message, type} = reply
      if (reply.status === 200) {
        httpConfig.post('/apis/image/upload', values.imagePath).then(reply => {
          let {message} = reply
          if (reply.status === 200) {
            httpConfig.post('apis/image', {
              imageHistoricSiteId: data.historicSiteId,
              imageName: 'Test',
              imagePath: message
            })
          }
        })
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
          <h2 className="text-left mb-4">Upload Historic Site</h2>
          <Formik onSubmit={uploadHistoricSite} initialValues={historicSite} validationSchema={validator}>
            {(props) => {
              const {
                setFieldValue,
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
                      <label htmlFor="name">Historic Site Name</label>
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
                      {errors.historicSiteName && touched.historicSiteName && (<div className="alert alert-danger">{errors.historicSiteName}</div>)}
                    </div>
                    <div className="form-group d-flex justify-content-between">
                      <div className="w-50 pr-2">
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
                        {errors.historicSiteMunicipality && touched.historicSiteMunicipality && (<div className="alert alert-danger">{errors.historicSiteMunicipality}</div>)}
                      </div>
                      <div className="w-50 pl-2">
                        <label htmlFor="state" className="justify-content-start">US State</label>
                        <input
                          className="form-control w-100"
                          id="state"
                          name="historicSiteState"
                          type="text"
                          placeholder="Two letter abbreviation"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.historicSiteState}
                        />
                        {errors.historicSiteState && touched.historicSiteState && (<div className="alert alert-danger">{errors.historicSiteState}</div>)}
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="description">Historic Site Description</label>
                      <textarea
                        className="form-control"
                        id="description"
                        name="historicSiteDescription"
                        placeholder="Description of historic site (600 characters max)"
                        rows="5"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.historicSiteDescription}
                      />
                      {errors.historicSiteDescription && touched.historicSiteDescription && (<div className="alert alert-danger">{errors.historicSiteDescription}</div>)}
                    </div>
                    <div className="form-group d-flex align-items-center">
                      <div className="form-group w-75 pr-2">
                        <label htmlFor="date" className="justify-content-start">Historic Date</label>
                        <input
                          className="form-control w-100"
                          id="date"
                          name="historicSiteDate"
                          type="text"
                          placeholder="Date or date range of historic site"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.historicSiteDate}
                        />
                        {errors.historicSiteDate && touched.historicSiteDate && (<div className="alert alert-danger">{errors.historicSiteDate}</div>)}
                      </div>
                      <div className="form-check pt-3 pl-0">
                        <label htmlFor="free" className="checkbox-label">Free</label>
                        <input
                          className="form-check-input checkbox"
                          id="free"
                          name="historicSiteCost"
                          type="checkbox"
                          value="Free"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          checked={values.historicSiteCost}
                        />
                        <label htmlFor="paid" className="checkbox-label">Paid</label>
                        <input
                          className="form-check-input checkbox"
                          id="paid"
                          name="historicSiteCost"
                          type="checkbox"
                          value="Paid"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          checked={values.historicSiteCost}
                        />
                        {errors.historicSiteCost && touched.historicSiteCost && (<div className="alert alert-danger">{errors.historicSiteCost}</div>)}
                      </div>
                    </div>
                    <div className="d-flex">
                      <ImageDropZone
                        formikProps={{
                          values,
                          handleChange,
                          handleBlur,
                          setFieldValue,
                          fieldValue: 'imagePath'
                        }}
                      />
                      <div className="ml-3">
                        <Button variant="primary" size="lg" type="submit">
                          Upload
                        </Button>
                      </div>
                    </div>
                  </form>
                  {status && (<div className={status.type}>{status.message}</div>)}
                </>
              )
            }}
          </Formik>
        </div>
      </div>
    </>
  )
}
