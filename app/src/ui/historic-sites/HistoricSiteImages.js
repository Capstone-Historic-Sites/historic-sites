import React from 'react'

export const HistoricSiteImages = (props) => {
  const {images} = props

  function changeImage () {
    let test = document.getElementById('main-image').src
    console.log(test)
  }

  return (
    <>
      <div className="col-md-6">
        {images.map((image, index) => {
          if (index === 0) {
            return <img id="main-image" className="w-100" src={image.imagePath} alt={image.imageName} />
          }
        })}
        <div className="py-3 d-flex flex-wrap justify-content-center">
          {images.map((image, index) => {
            if (index !== 0) {
              return <img id={`thumbnail-${index}`} className="w-25 px-1" src={image.imagePath} alt={image.imageName} style={{cursor: 'pointer'}} onClick={changeImage} />
            }
          })}
        </div>
      </div>
    </>
  )
}