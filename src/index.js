import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { Switch, Route } from 'react-router-dom'
import store, { history } from './store'
import HomePage from './containers/home'
import LoginPage from './containers/login'
import AuthorizedRoute from './containers/routes/AuthorizedRoute'

import 'sanitize.css/sanitize.css'
import './index.css'

const target = document.querySelector('#root')

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <AuthorizedRoute path="/" component={HomePage} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  target
)
