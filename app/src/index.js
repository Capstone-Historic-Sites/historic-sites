import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import {BrowserRouter} from 'react-router-dom'
import {Route, Switch} from 'react-router'
import {FourOhFour} from './pages/FourOhFour'
import {Home} from './pages/Home'
import {HistoricSite} from './pages/HistoricSite'

const Routing = () => (
  <>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/historic-site" component={HistoricSite} />
        <Route component={FourOhFour} />
      </Switch>
    </BrowserRouter>
  </>
)

ReactDOM.render (
  <Routing/>, document.querySelector('#root')
)
