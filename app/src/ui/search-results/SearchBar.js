import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch } from 'react-redux'
import { fetchHistoricSiteBySearch } from '../../store/historic-site'

export const SearchBar = () => {

  const dispatch = useDispatch()

  const openSidebar = () => {
    document.getElementById('sidebar').style.marginLeft = '0'
  }

  function testFunction () {
    const search = document.getElementById('search-input').value
    dispatch(fetchHistoricSiteBySearch(search))
  }

  return(
    <>
      <div className="position-relative">
        <FontAwesomeIcon icon="search" className="search-icon"/>
        <input id="search-input" className="form-control search-input" type="text" placeholder="Search" aria-label="Search"/>
        <button onClick={testFunction}>Test</button>
        <div className="filter-toggle d-md-none" onClick={openSidebar}>Filter</div>
      </div>
    </>
  )
}