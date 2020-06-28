import React from 'react'
import ReactMapboxGl from 'react-mapbox-gl'
import {MapMarker} from './MapMarker'

export const Mapbox = (props) => {

  const {historicSites} = props

  const points = historicSites.map(historicSite => ({lat: historicSite.historicSiteLat, lng: historicSite.historicSiteLong}))
  if (points.length > 0) {
    //console.log(points[0].lat)
  }

  const Map = ReactMapboxGl({
    accessToken: process.env.MAPBOX_TOKEN
  })

  return (
    <>
      <Map
        style="mapbox://styles/mapbox/streets-v11"
        containerStyle = {{
          border: '3px solid #333',
          height: '68vh',
          width: '100%'
        }}
        center={[-105.8701, 34.5199]}
        zoom={[6]}
      >
        {points.map(point => <MapMarker point={point} />)}
      </Map>
    </>
  )
}