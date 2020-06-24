import React from 'react'
import { NavBar } from '../shared/components/NavBar'
import { ProfileSidebar } from '../shared/components/ProfileSidebar'
import Button from 'react-bootstrap/Button'
import { httpConfig } from '../../utils/http-config'
import { Formik } from 'formik'
import * as Yup from 'yup'

export function SignIn () {

  const validator = Yup.object().shape({
    profileEmail: Yup.string()
      .required('Email is required')
      .email('Please provide a valid email')
      .max(128, 'Please provide an email shorter than 128 characters'),
    profilePassword: Yup.string()
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters')
  })

  const profile = {
    profileEmail: '',
    profilePassword: ''
  }

  const signInProfile = (values, {resetForm, setStatus}) => {
    httpConfig.post("/apis/sign-in", values).then(reply => {
      let {message, type} = reply
      if (reply.status === 200) {
        window.localStorage.removeItem("authorization")
        window.localStorage.setItem("authorization", reply.headers["authorization"])
        resetForm()
      }
      setStatus({message, type})
    })
  }

  window.onload = () => {
    document.getElementById('settings').style.background = '#6a85a0'
    document.getElementById('settings-caret').style.display = 'block'
  }

  return (
    <>
      <NavBar />
      <div className="grid-container">
        <div>
          <ProfileSidebar />
        </div>
        <div className="container py-5">
          <h2 className="text-left">Sign In</h2>
          <Formik onSubmit={signInProfile} initialValues={profile} validationSchema={validator}>
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
                      <label htmlFor="profile-email">Profile Email</label>
                      <input
                        className="form-control"
                        id="profile-email"
                        name="profileEmail"
                        type="email"
                        placeholder="Email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.profileEmail}
                      />
                      {errors.profileEmail && touched.profileEmail && (<div className="alert alert-danger">{errors.profileEmail}</div>)}
                    </div>
                    <div className="form-group">
                      <label htmlFor="profile-password">Profile Password</label>
                      <input
                        className="form-control"
                        id="profile-password"
                        name="profilePassword"
                        type="password"
                        placeholder="Password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.profilePassword}
                      />
                      {errors.profilePassword && touched.profilePassword && (<div className="alert alert-danger">{errors.profilePassword}</div>)}
                    </div>
                    <div className="d-flex justify-content-between">
                      <div className="mb-3" align="left">
                        <Button variant="primary" size="md" type="submit">
                          Sign In
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