import React from 'react'

export const ProfileSidebar = () => {
  return (
    <>
      <div className="profile-sidebar p-4">
        <h5>Profile Name</h5>
        <h5>Organization</h5>
        <p className="my-4">emailaddress@gmail.com</p>
        <hr/>
        <h5>Travel List</h5>
        <h5>Settings</h5>
        <h5>Upload Site</h5>
        <p className="position-absolute" style={{bottom: 0}}>Sign Out</p>
      </div>
    </>
  )
}