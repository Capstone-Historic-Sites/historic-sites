import {combineReducers} from 'redux'
import historicSites from "./historic-site"
import profileSidebar from "./profile-sidebar.js"
import tags from "./tags"
import images from './image'

export default combineReducers({historicSites, profileSidebar, tags, images})