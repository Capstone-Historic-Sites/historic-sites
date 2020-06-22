import React from 'react'

export function TagsProp (props) {
  const {tag} = props
  return (
    <>
      <div className='form-check mt-1'>
        <input className="form-check-input" type="checkbox"/>
        <label className="form-check-label" >{tag.tagName} </label>
      </div>
    </>
  )
}