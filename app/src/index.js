import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './css/style.css'
import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router'
import { Home } from './ui/Home'
import { SearchResults } from './ui/search-results/SearchResults'
import { HistoricSite } from './ui/HistoricSite'
import { SignUp } from './ui/profile/SignUp'
import { Upload } from './ui/Upload'
import { TravelList } from './ui/travel-list/TravelList'
import { FourOhFour } from './ui/FourOhFour'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowLeft, faBars, faCar, faCaretRight, faCog, faList, faMapMarkerAlt, faPlusCircle, faSearch, faUpload, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import reducer from './store'

library.add( faArrowLeft, faBars, faCar, faCaretRight, faCog, faList, faMapMarkerAlt, faPlusCircle, faSearch, faUpload, faUserCircle )

const store = configureStore({reducer})

const Routing = (store) => (
  <>
    <Provider store={store}>
      <React.StrictMode>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/search-results" component={SearchResults} />
            <Route exact path="/historic-site" component={HistoricSite} />
            <Route exact path="/sign-up" component={SignUp} />
            <Route exact path="/upload" component={Upload} />
            <Route exact path="/travel-list" component={TravelList} />
            <Route component={FourOhFour} />
          </Switch>
        </BrowserRouter>
      </React.StrictMode>
    </Provider>
  </>
)

ReactDOM.render (
  Routing(store), document.querySelector('#root')
)
