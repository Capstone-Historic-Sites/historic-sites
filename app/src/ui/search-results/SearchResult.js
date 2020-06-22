import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { SearchResultImage } from './SearchResultImage'
import { fetchHistoricSiteImages} from '../../store/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux'

export function SearchResult (props) {
  const {historicSite} = props

  const dispatch = useDispatch()

  const images = useSelector(store => {
    return store.images ? store.images : []
  })

  const sideEffects = () => {
    dispatch(fetchHistoricSiteImages(historicSite.historicSiteId))
  }

  React.useEffect(sideEffects, [])

  return (
    <>
      <div className="row py-3">
        <div className="col-lg-5">
          <Carousel interval={null}>
            {images.map(image => <SearchResultImage image={image} key={image.imageId} />)}
          </Carousel>
        </div>
        <div className="col-lg-7 px-4">
          <h2>{historicSite.historicSiteName}</h2>
          <p>{historicSite.historicSiteMunicipality}, {historicSite.historicSiteState}</p>
          <p>{historicSite.historicSiteDescription}</p>
          <FontAwesomeIcon icon="plus-circle" /> <p className="d-inline-block">Add Site</p>
        </div>
      </div>
    </>
  )
}