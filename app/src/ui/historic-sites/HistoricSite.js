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
        <div className="row py-4 px-3">
            <h2>Related Sites</h2>
        </div>
        <div className="row py-2">
          <div className="col-md-3 col-6 text-center">
            <img className="w-100" src="https://res.cloudinary.com/historicsites/image/upload/v1592846650/fort_union1_svlbg6.jpg" alt="Fort Union National Monument"/>
            <h5 className="my-3">Fort Union National Monument</h5>
          </div>
          <div className="col-md-3 col-6 text-center">
            <img className="w-100" src="https://res.cloudinary.com/historicsites/image/upload/v1592846694/glorieta1_i9kuon.jpg" alt="Glorieta Pass Battlefield"/>
            <h5 className="my-3">Glorieta Pass Battlefield</h5>
          </div>
          <div className="col-md-3 col-6 text-center">
            <img className="w-100" src="https://res.cloudinary.com/historicsites/image/upload/v1592846698/lincoln1_lhosw6.jpg" alt="Lincoln Historic Site"/>
            <h5 className="my-3">Lincoln Historic Site</h5>
          </div>
          <div className="col-md-3 col-6 text-center">
            <img className="w-100" src="https://res.cloudinary.com/historicsites/image/upload/v1592846651/rio_grande_del_norte3_mkwq5x.jpg" alt="Rio Grande Del Norte National Monument"/>
            <h5 className="my-3">Rio Grande Del Norte National Monument</h5>
          </div>
        </div>
      </div>
    </>
  )
}