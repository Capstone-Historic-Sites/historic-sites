import React from 'react'
import { NavBar } from '../shared/components/NavBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { HistoricSiteProp } from './HistoricSiteProp'
import { fetchHistoricSiteByHistoricSiteId } from '../../store/historic-site'
import { useDispatch, useSelector } from 'react-redux'

export const HistoricSite = () => {
  const dispatch = useDispatch()

  const historicSites = useSelector(store => {
    return store.historicSites ? store.historicSites : []
  })

  const sideEffects = () => {
    dispatch(fetchHistoricSiteByHistoricSiteId())
  }
  React.useEffect(sideEffects, [])
  return (
    <>
      <NavBar/>
      <div className="container pt-5">
        {
          historicSites.map(historicSiteProp => <HistoricSiteProp historicSiteProp={historicSiteProp} key={historicSiteProp.historicSiteId} />)
        }
        <div className="row pt-2">
            <h2>Related Sites</h2>
        </div>
        <div className="row py-2">
          <div className="col-md-3 col-6 text-center">
            <img className="w-100" src="http://placekitten.com/600/600" alt="Relate Sited 1"/>
            <h5 className="my-3">Historic Site Name</h5>
          </div>
          <div className="col-md-3 col-6 text-center">
            <img className="w-100" src="http://placekitten.com/800/800" alt="Relate Sited 1"/>
            <h5 className="my-3">Historic Site Name</h5>
          </div>
          <div className="col-md-3 col-6 text-center">
            <img className="w-100" src="http://placekitten.com/900/900" alt="Relate Sited 1"/>
            <h5 className="my-3">Historic Site Name</h5>
          </div>
          <div className="col-md-3 col-6 text-center">
            <img className="w-100" src="http://placekitten.com/1000/1000" alt="Relate Sited 1"/>
            <h5 className="my-3">Historic Site Name</h5>
          </div>
        </div>
      </div>
    </>
  )
}