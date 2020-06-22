import React from 'react'
import Carousel from 'react-bootstrap'

export function SearchResultImage (props) {
  const {image} = props
  return (
    <>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image.imagePath}
          alt={image.imageName}
        />
      </Carousel.Item>
    </>
  )
}