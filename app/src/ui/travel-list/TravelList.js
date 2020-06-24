import React from 'react'
import { NavBar } from '../shared/components/NavBar'
import { ProfileSidebar } from '../shared/components/ProfileSidebar'
import { TravelListSite } from './TravelListSite'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTravelListByProfileId} from '../../store/travel-list'
import { fetchAllImages } from '../../store/image'

export const TravelList = () => {

  const dispatch = useDispatch()

  const travelList = useSelector(store => {
    return store.travelList ? store.travelList : []
  })

  const images = useSelector(store => {
    return store.images ? store.images : []
  })

  const sideEffects = () => {
    dispatch(fetchTravelListByProfileId())
    dispatch(fetchAllImages())
  }

  React.useEffect(sideEffects, [])

  window.onload = () => {
    document.getElementById('travel-list').style.background = '#6a85a0'
    document.getElementById('travel-caret').style.display = 'block'
  }

  return (
    <>
      <NavBar />
      <div className="grid-container">
        <div>
          <ProfileSidebar />
        </div>
        <div className="container py-5 text-left">
          <h2>Travel List</h2>
          <hr />
          <div className="d-flex flex-wrap py-4">
            {travelList.map(historicSite => <TravelListSite historicSite={historicSite} images={images} key={historicSite.historicSiteId} />)}
          </div>
        </div>
      </div>
    </>
  )
}

