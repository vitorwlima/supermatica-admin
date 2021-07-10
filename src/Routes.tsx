import React, { Fragment, lazy, Suspense } from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import { AuthGuard, GuestGuard, Loader } from './components'

const routesConfig = [
  {
    exact: true,
    guard: AuthGuard,
    path: '/',
    component: lazy(() => import('./views/Home')),
  },
  {
    exact: true,
    guard: GuestGuard,
    path: '/login',
    component: lazy(() => import('./views/Login')),
  },
  {
    exact: true,
    path: '/questions',
    component: lazy(() => import('./views/Questions')),
  },
]

const renderRoutes = (routes: any) =>
  routes ? (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <Switch>
          {routes.map((route: any, i: number) => {
            const Guard = route.guard ? route.guard : Fragment

            const Component = route.component

            return (
              <Route
                key={i}
                path={route.path}
                exact={route.exact}
                render={(props): JSX.Element => (
                  <Guard>
                    <>
                      <Component {...props} />
                    </>
                  </Guard>
                )}
              />
            )
          })}
        </Switch>
      </BrowserRouter>
    </Suspense>
  ) : null

function Routes() {
  return renderRoutes(routesConfig)
}

export default Routes
