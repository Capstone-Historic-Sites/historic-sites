import React from 'react'

export function TagsProp (props) {
  const {tag} = props
  return (
    <>
      <div>
        <div className='ml-2' >
          <label><input type="checkbox" value='1'/>{tag.tagName} </label>
        </div>
      </div>
    </>
  )
}