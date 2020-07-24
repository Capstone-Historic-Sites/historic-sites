import React from 'react'
import { useHistory } from 'react-router'
import { Nav, Navbar } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const NavBar = () => {

  const history = useHistory()

  const toggleProfileSidebar = () => {
    const profileSidebar = document.getElementById('profile-sidebar')
    if (profileSidebar) {
      profileSidebar.style.marginLeft = 0
    } else {
      history.push('/sign-up')
    }
  }

  return (
    <>
      <Navbar bg="dark" variant="dark" className="position-fixed w-100">
        <Nav>
          <Nav.Link onClick={toggleProfileSidebar}> 
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