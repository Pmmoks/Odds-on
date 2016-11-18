import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'

import LandingPage from './LandingPage.jsx'
import App from './App.jsx'

const Sample = () => (<h1>React Router is working.</h1>)
const Example = () => (<h1>React Router is really working!</h1>)

render((
  <Router history={hashHistory}>
    <Route path="/landing" component={LandingPage} />
    <Route path="/" component={App} />
    <Route path="/sample" component={Sample} />
    <Route path="/example" component={Example} />
  </Router>
), document.getElementById('app')
)
