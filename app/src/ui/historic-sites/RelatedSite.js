import React from 'react'

export const RelatedSite = (props) => {
  const {relatedSite} = props

  return (
    <>
      <div className="col-md-3 col-6 text-center">
        <img className="w-100" src="http://placekitten.com/600/600" alt="Relate Sited 1"/>
        <h5 className="my-3">{relatedSite.historicSiteName}</h5>
      </div>
    </>
  )
}