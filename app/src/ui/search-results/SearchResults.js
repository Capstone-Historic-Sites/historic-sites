import React from 'react'
import { NavBar } from '../shared/components/NavBar'
import { SearchResult } from './SearchResult'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllHistoricSites } from '../../store/historic-site'

export const SearchResults = () => {

  const dispatch = useDispatch()

  const historicSites = useSelector(store => {
    return store.historicSites ? store.historicSites : []
  })

  const sideEffects = () => {
    dispatch(fetchAllHistoricSites())
  }

  React.useEffect(sideEffects, [])

  const switchToListView = () => {
    document.getElementById('map-view').style.display = 'none'
    document.getElementById('list-view').style.display = 'block'
  }
  const switchToMapView = () => {
    document.getElementById('list-view').style.display = 'none'
    document.getElementById('map-view').style.display = 'block'
  }

  const openSidebar = () => {
      document.getElementById('sidebar').style.marginLeft = '0'
  }
  const closeSidebar = () => {
    document.getElementById('sidebar').style.marginLeft = '-300px'
  }

  return (
    <>
      < NavBar />

      <div className="grid-container">

        <div className='container'>
          <div className="sidebar p-4" id="sidebar" style={{background: '#6f7565'}}>
            <div className="d-flex justify-content-between">
              <h5 className="d-inline-block">Filter By Tag</h5>
              <FontAwesomeIcon className="d-md-none" icon="arrow-left" onClick={closeSidebar} />
            </div>
            <hr/>
            <div className='ml-2' >
              <label><input type="checkbox" value='1'/> Tag 1 </label>
            </div>
            <div className='ml-2'>
              <label><input type="checkbox" value='2'/> Tag 2 </label>
            </div>
            <div className='ml-2'>
              <label><input type="checkbox" value='3'/> Tag 3 </label>
            </div>
            <div className='ml-2'>
              <label><input type="checkbox" value='4'/> Tag 4 </label>
            </div>
            <div className='ml-2'>
              <label><input type="checkbox" value='5'/> Tag 5 </label>
            </div>
            <div className='ml-2'>
              <label><input type="checkbox" value='6'/> Tag 6 </label>
            </div>
          </div>
        </div>

        <div className="container pt-5">

          {/*Search Bar*/}
          <div className="row">
            <div className="col" >
              <div className="position-relative">
                <FontAwesomeIcon icon="search" className="search-icon"/>
                <input className="form-control search-input" type="text" placeholder="Search" aria-label="Search" />
                <div className="filter-toggle d-md-none" onClick={openSidebar}>Filter</div>
              </div>
            </div>
          </div>
          {/*Search Bar*/}

          {/*Map View & List View*/}
          <div className="row pt-3">
            <div className="col d-flex pl-4">
              <div className="list-view" onClick={switchToListView}>
                <FontAwesomeIcon icon="list" />
                <p className="d-inline-block pl-2">List View</p>
              </div>
            </div>
            <div className="col d-flex justify-content-end mr-3">
              <div className="map-view" onClick={switchToMapView}>
                <FontAwesomeIcon icon="map-marker-alt" className="mt-1"/>
                <p className="d-inline-block ml-1">Map View</p>
              </div>
            </div>
          </div>
          {/*/Map View & List View*/}
        </div>

        <div></div>

        {/*Sites Container*/}
        <div className="container py-4" id="list-view">
          {historicSites.map(historicSite => <SearchResult historicSite={historicSite} key={historicSite.historicSiteId} />)}
        </div>

        <div className="container py-4" id="map-view" style={{display: 'none'}}>
          <h1>Map View</h1>
        </div>
      </div>
    </>
  )
}