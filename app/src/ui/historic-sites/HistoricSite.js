import React from 'react'
import { NavBar } from '../shared/components/NavBar'
import { HistoricSiteProp } from './HistoricSiteProp'
import { fetchHistoricSiteByHistoricSiteId } from '../../store/historic-site'
import { fetchHistoricSiteImages } from '../../store/image'
import { fetchHistoricSiteTagsByHistoricSiteId} from '../../store/tags'
import { fetchHistoricSiteByTagId } from '../../store/related-sites'
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
    dispatch(fetchHistoricSiteByTagId(tags))
  }

  React.useEffect(sideEffects, [match.params.historicSiteId, tags])

  return (
    <>
      <NavBar/>
      <div className="container" style={{paddingTop: '5rem'}}>
        {
          historicSites.map(historicSite => <HistoricSiteProp historicSite={historicSite} images={images} tags={tags} key={historicSite.historicSiteId} />)
        }
      </div>
    </>
  )
}