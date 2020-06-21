import React from 'react'
import {Marker} from 'react-mapbox-gl'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

export const MapMarker = ({point}) => {
  return (
    <>
      <Marker coordinates={point} anchor="bottom" >
        <FontAwesomeIcon icon="map-marker-alt" size="lg" />
      </Marker>
    </>
  )
}