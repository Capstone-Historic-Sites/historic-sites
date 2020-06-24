import React from 'react'
import { NavBar } from '../shared/components/NavBar'
import { HistoricSiteProp } from './HistoricSiteProp'
import { fetchHistoricSiteByHistoricSiteId } from '../../store/historic-site'
import { fetchHistoricSiteImages } from '../../store/image'
import { fetchHistoricSiteTagsByHistoricSiteId} from '../../store/tags'
import { useDispatch, useSelector } from 'react-redux'

export const HistoricSite = ({match}) => {
  const dispatch = useDispatch()

  const historicSites = useSelector(store => {
    return store.historicSites ? store.historicSites : []
  })

  const images = useSelector(store => {
    return store.images ? store.images : []
  })

  const tags = useSelector(store => {
    return store.tags ? store.tags : []
  })

  const sideEffects = () => {
    dispatch(fetchHistoricSiteByHistoricSiteId(match.params.historicSiteId))
    dispatch(fetchHistoricSiteImages(match.params.historicSiteId))
    dispatch(fetchHistoricSiteTagsByHistoricSiteId(match.params.historicSiteId))
  }
  React.useEffect(sideEffects, [match.params.historicSiteId])
  return (
    <>
      <NavBar/>
      <div className="container" style={{paddingTop: '5rem'}}>
        {
          historicSites.map(historicSite => <HistoricSiteProp historicSite={historicSite} images={images} tags={tags} key={historicSite.historicSiteId} />)
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