import React from 'react'

export function ProfileSidebarProp (props) {
  const {profile} = props

  return (
    <>
      <div>
        <h5>{profile.profileName}</h5>
        <h5>{profile.profileOrganization}</h5>
        <p className="my-4">{profile.profileEmail}</p>
      </div>
    </>
  )

}