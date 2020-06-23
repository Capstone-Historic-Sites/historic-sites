import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" className="position-fixed w-100">
        <Nav>
          <Nav.Link href="/travel-list">
            <FontAwesomeIcon icon="user-circle" /> Profile
          </Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          <Nav.Link href="/">Search</Nav.Link>
          <Nav.Link href="/upload">Upload</Nav.Link>
        </Nav>
      </Navbar>
    </>
  )
}