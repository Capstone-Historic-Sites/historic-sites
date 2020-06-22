import React from 'react'
import { NavBar } from './shared/components/NavBar'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllHistoricSites } from '../../store/historic-site'
import { fetchAllTags } from '../store/tags'


export const Home = () => {

  const dispatch = useDispatch()

  const historicSites = useSelector(store => {
    return store.historicSites ? store.historicSites : []
  })

  const tags = useSelector(store => {
    return store.tags ? store.tags : []
  })

  const sideEffects = () => {
    dispatch(fetchAllHistoricSites())
  }

  React.useEffect(sideEffects, [])

  return (
    <>
      <NavBar />
        <section className="title-section">
          <div className="container">
            <div className="text-center w-100">
              <h1 className="display-2" >Historic Sites</h1>
              <div className="mb-4 position-relative">
                <FontAwesomeIcon icon="search" className="search-icon"/>
                <input className="form-control search-input" type="text" placeholder="Search" aria-label="Search" />
              </div>
            </div>
          </div>
        </section>
        <section className="about-section">
          <div className="container text-center">
            <h3><strong>About</strong></h3>
            <p>"Welcome to the Historic Sites website where we have a collection
              of historic locations in and around Albuquerque. People can visit and
              explore the many fun and unique sites filled with rich history all throughout
              New Mexico. The site will also have a short summary of each location to give
              you a better understanding as well as a link to the specific site if you would
              like more in depth knowledge."</p>
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
