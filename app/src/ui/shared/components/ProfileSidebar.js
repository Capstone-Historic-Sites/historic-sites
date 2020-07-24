import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {useDispatch, useSelector} from 'react-redux'
import { fetchProfileByProfileId } from '../../../store/profile-sidebar'
import { ProfileSidebarProp } from './ProfileSidebarProp'
import { Button } from 'react-bootstrap'
import { httpConfig } from '../../../utils/http-config'
import { useHistory } from 'react-router'

export const ProfileSidebar = () => {

  const dispatch = useDispatch()

  const history = useHistory()

  const profileSidebar = useSelector(store => {
    return store.profileSidebar ? store.profileSidebar : []
  })

  const sideEffects = () => {
    dispatch(fetchProfileByProfileId())
  }

  React.useEffect(sideEffects, [])

  function signOut () {
    httpConfig(`/apis/sign-out`).then(reply => {
      if (reply.status === 200) {
        history.push('/')
      }
    })
  }

  return (
    <>
      <div className="sidebar p-4" id="profile-sidebar">
        {
          profileSidebar.map(profile => <ProfileSidebarProp profile={profile} key={profile.profileId} />)
        }
        <hr/>
        <a href="/travel-list">
          <div className="d-flex p-2 my-2 profile-select" id="travel-list">
            <FontAwesomeIcon icon="car" className="mt-1" />
            <h5 className="ml-2 m-0">Travel List</h5>
            <FontAwesomeIcon icon="caret-right" className="mt-1 ml-auto" id="travel-caret" style={{display: 'none'}} />
          </div>
        </a>
        <a href="/sign-up">
          <div className="d-flex p-2 my-2 profile-select" id="settings">
            <FontAwesomeIcon icon="cog" className="mt-1" />
            <h5 className="ml-2 m-0">Settings</h5>
            <FontAwesomeIcon icon="caret-right" className="mt-1 ml-auto" id="settings-caret" style={{display: 'none'}} />
          </div>
        </a>
        <a href="/upload">
          <div className="d-flex p-2 my-2 profile-select" id="upload">
            <FontAwesomeIcon icon="upload" className="mt-1" />
            <h5 className="ml-2 m-0">Upload Site</h5>
            <FontAwesomeIcon icon="caret-right" className="mt-1 ml-auto" id="upload-caret" style={{display: 'none'}} />
          </div>
        </a>
        <div className="sign-out">
          <Button size="lg" onClick={signOut} >
            Sign Out
          </Button>
        </div>
      </div>
    </>
  )
}