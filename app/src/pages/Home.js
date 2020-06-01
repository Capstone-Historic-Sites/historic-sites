import React from 'react'
import { NavBar } from '../shared/components/NavBar'
import Button from 'react-bootstrap/Button'

export const Home = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <div className="title-section">
          <div className="w-100">
            <h1 className="text-center display-2" ><strong>Historic Sites</strong></h1>
            <div className="active-pink-3 active-pink-4 mb-4">
              <input className="form-control" type="text" placeholder="Search" aria-label="Search" />
            </div>
          </div>
        </div>
        <div className="about-section">
          <div>
            <h3 className="text-center"><strong>About</strong></h3>
            <p className="text-center">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
              non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            <div className="mb-2" align="center">
              <Button variant="primary" size="lg">
                Create Profile
              </Button>{' '}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
