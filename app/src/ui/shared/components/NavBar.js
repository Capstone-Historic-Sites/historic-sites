import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" className="position-fixed w-100">
        <Nav>
          <Nav.Link href="/sign-in">
            <FontAwesomeIcon icon="user-circle" /> Profile
          </Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          <Nav.Link href="/">Search</Nav.Link>
          <Nav.Link href="/upload">Upload</Nav.Link>
          <Nav.Link href="/">
            <FontAwesomeIcon icon="home" />
          </Nav.Link>
        </Nav>
      </Navbar>
    </>
  )
}