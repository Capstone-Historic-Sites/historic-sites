import {combineReducers} from 'redux'
import historicSites from "./historic-site"
import profileSidebar from "./profile-sidebar.js"
import tags from "./tags"
import images from './image'
import travelList from './travel-list'

export default combineReducers({historicSites, profileSidebar, tags, images, travelList})