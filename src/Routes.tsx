import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Home, Login } from './views'

const routesConfig = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/login',
    component: Login,
  },
]

const Routes = (): any => (
  <BrowserRouter>
    <Switch>
      {routesConfig.map((route: any, i: number) => (
        <Route path={route.path} component={route.component} key={i} exact />
      ))}
    </Switch>
  </BrowserRouter>
)

export default Routes
