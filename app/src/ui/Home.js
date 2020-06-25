import React from 'react'
import { NavBar } from './shared/components/NavBar'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link} from 'react-router-dom'
import { useHistory } from 'react-router'

export const Home = () => {

  const history = useHistory()

  const handleRedirect = () => {
    let search = document.getElementById('search').value
    if (search !== '') {
      history.push(`/search/${search}`)
    }
  }

  return (
    <>
      <NavBar />
        <section className="title-section">
          <div className="container">
            <div className="text-center w-100">
              <h1 className="display-2" >Historic Sites</h1>
              <div className="mb-4 position-relative">
                <FontAwesomeIcon icon="search" className="search-icon"/>
                <input id="search" className="form-control search-input" type="text" placeholder="Search" aria-label="Search" />
              </div>
              <Button variant="secondary" size="lg" onClick={handleRedirect}>
                Search
              </Button>
            </div>
          </div>
        </section>
        <section className="about-section">
          <div className="container text-center">
            <h3><strong>About</strong></h3>
            <p className="lead my-3">Welcome to the Historic Sites website where we have a collection
              of historic locations around New Mexico. Users can search and
              explore the many fun and unique sites filled with rich history all throughout
              the state. All data on this website is user-generated, so we encourage
              you to please make an account and provide high-quality submissions.</p>
            <div className="my-2">
            <Link to="/sign-up">
              <Button variant="primary" size="lg">Create Profile</Button>
            </Link>
            </div>
          </div>
        </section>
    </>
  )
}
