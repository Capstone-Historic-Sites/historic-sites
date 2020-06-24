import React, {useCallback} from 'react'
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
        <div className="input-group form-control my-5">
          <input
            className="form-control-file"
            accept="image/*"
            onChange={formikProps.handleChange}
            onBlur={formikProps.handleBlur}
            {...getInputProps()}
          />
          {isDragActive ? <p>Drop Files Here</p> : <p>Drag and drop files, or click to select files</p>}
        </div>
      </div>
    </>
  )
}