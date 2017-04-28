import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, browserHistory, match } from 'react-router'

import routes from './routes'
import configureStore from './store'

const store=configureStore()
const app = document.getElementById('app')

match({ history: browserHistory, routes }, (error, redirectLocation, renderProps) => {
  render(<Provider store={store}>
            <Router {...renderProps} />
         </Provider>, app)
})
