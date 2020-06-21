import React from 'react'
import ReactMapboxGl from 'react-mapbox-gl'
import {MapMarker} from './MapMarker'

export const Mapbox = (props) => {

  const {historicSites} = props

  const points = historicSites.map(historicSite => ({lat: historicSite.historicSiteLat, lng: historicSite.historicSiteLong}))
  console.log(points[0])

  const Map = ReactMapboxGl({
    accessToken:
      'pk.eyJ1IjoiaGlzdG9yaWNzaXRlcyIsImEiOiJja2JvanF5cnMyMHphMzRuY3ZwaHM1YjIwIn0.PGeVtnK6DMFPR5qH72Wncw'
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