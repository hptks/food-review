import React from 'react'
import { Route } from 'react-router'

import App from './components/App'
import Signin from './components/Signin'
import Signup from './components/Signup'
import Profile from './components/Profile'

export default (
  <Route path='/' component={App}>
    <Route path='signin' component={Signin} />
    <Route path='profile' component={Profile} />
    <Route path='signup' component={Signup} />
  </Route>
)
