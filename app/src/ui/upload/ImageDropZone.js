import React, {useCallback} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {useDropzone} from 'react-dropzone'

export const ImageDropZone = ({formikProps}) => {
  const onDrop = useCallback(acceptedFiles => {
    const formData = new FormData()
    formData.append('image', acceptedFiles[0])
    formikProps.setFieldValue(formikProps.fieldValue, formData)
  }, [formikProps])

  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <>
      <div className="form-group" {...getRootProps()}>
        <div className="photo-select d-flex">
          <FontAwesomeIcon icon="folder-open" className="mt-1 mr-2" />
          <input
            className="form-control-file"
            accept="image/*"
            onChange={formikProps.handleChange}
            onBlur={formikProps.handleBlur}
            {...getInputProps()}
          />
          {isDragActive ? <p className="m-0">Select Photos</p> : <p className="m-0">Select Photos</p>}
        </div>
      </div>
    </>
  )
}