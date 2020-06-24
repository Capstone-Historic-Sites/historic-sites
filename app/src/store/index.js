import {combineReducers} from 'redux'
import historicSites from "./historic-site"
import profileSidebar from "./profile-sidebar.js"
import tags from "./tags"
import images from './image'
import travelList from './travel-list'
import relatedSites from './related-sites'

export default combineReducers({historicSites, profileSidebar, tags, images, travelList, relatedSites})