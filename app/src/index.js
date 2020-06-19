import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './css/style.css'
import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router'
import { Home } from './pages/Home'
import { SearchResults } from './pages/SearchResults'
import { HistoricSite } from './pages/HistoricSite'
import { Upload } from './pages/Upload'
import { TravelList } from './pages/TravelList'
import { FourOhFour } from './pages/FourOhFour'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowLeft, faBars, faCar, faCaretRight, faCog, faList, faMapMarkerAlt, faPlusCircle, faSearch, faUpload, faUserCircle } from '@fortawesome/free-solid-svg-icons'

library.add( faArrowLeft, faBars, faCar, faCaretRight, faCog, faList, faMapMarkerAlt, faPlusCircle, faSearch, faUpload, faUserCircle )

const Routing = () => (
  <>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/search-results" component={SearchResults} />
        <Route exact path="/historic-site" component={HistoricSite} />
        <Route exact path="/upload" component={Upload} />
        <Route exact path="/travel-list" component={TravelList} />
        <Route component={FourOhFour} />
      </Switch>
    </BrowserRouter>
  </>
)

ReactDOM.render (
  <Routing/>, document.querySelector('#root')
)
