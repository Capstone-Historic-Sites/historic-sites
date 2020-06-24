import React from 'react'
import { HistoricSiteImages } from './HistoricSiteImages'
import { RelatedSite } from './RelatedSite'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fetchHistoricSiteByTagId } from '../../store/related-sites'
import {httpConfig} from '../../utils/http-config'
import { useDispatch, useSelector } from 'react-redux'

export function HistoricSiteProp (props) {
  const {historicSite, images, tags} = props

  const dispatch = useDispatch()

  const relatedSites = useSelector(store => {
    return store.relatedSites ? store.relatedSites : []
  })

  const sideEffects = () => {
    dispatch(fetchHistoricSiteByTagId(tags))
  }

  React.useEffect(sideEffects, [])

  function addToTravelList () {
    httpConfig.post('/apis/travel-list/', {travelListHistoricSiteId: historicSite.historicSiteId}).then(reply => {
      let {message} = reply
      if (reply.status === 200) {
        document.getElementById('status').innerText = message
      } else {
        document.getElementById('status').innerText = 'huh?'
      }
    })
  }

  return (
    <>
      <div className="row py-5">
        <HistoricSiteImages images={images} />
        <div className="col-md-6">
          <h1>{historicSite.historicSiteName}</h1>
          <div className="d-flex pb-3 flex-wrap">
            {tags.map(tag => <p className="tag">{tag.tagName}</p>)}
          </div>
          <p>
            {historicSite.historicSiteMunicipality}, {historicSite.historicSiteState}<br />
            <strong>{historicSite.historicSiteDate}</strong> <br />
            {historicSite.historicSiteCost}
          </p>
          <p>
            <div dangerouslySetInnerHTML={{__html: historicSite.historicSiteDescription}} />
          </p>
          <p className="blue-link" onClick={addToTravelList}>
            <FontAwesomeIcon icon="plus-circle" /> <strong>Add to Travel List</strong>
          </p>
          <div id="status"></div>
        </div>
      </div>
      <div className="row pt-2">
        <h2>Related Sites</h2>
      </div>
      <div className="row py-2">
        {relatedSites.map((relatedSite,index) => {
          if (index < 4) {
            return <RelatedSite relatedSite={relatedSite} key={relatedSite.historicSiteId}/>
          }
        })}
      </div>
    </>
  )
}