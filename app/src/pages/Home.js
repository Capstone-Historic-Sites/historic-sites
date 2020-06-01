import React from 'react'
import { NavBar } from '../shared/components/NavBar'
import Button from 'react-bootstrap/Button'

export const Home = () => {
  return (
    <>
      <NavBar />
      <section className="title-section">
        <div className="container">
          <div className="text-center w-100">
            <h1 className="display-2" >Historic Sites</h1>
            <div className="active-pink-3 active-pink-4 mb-4">
              <input className="form-control" type="text" placeholder="Search" aria-label="Search" />
            </div>
          </div>
        </div>
      </section>
      <section className="about-section">
        <div className="container text-center">
          <h3><strong>About</strong></h3>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
              non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
          <div className="mb-2">
            <Button variant="primary" size="lg">
              Create Profile
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
