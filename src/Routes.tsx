import React, { Fragment, lazy, Suspense } from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import { AuthGuard, GuestGuard, Loader } from './components'

const routesConfig = [
  {
    guard: AuthGuard,
    path: '/',
    component: lazy(() => import('./views/Home')),
  },
  {
    guard: GuestGuard,
    path: '/login',
    component: lazy(() => import('./views/Login')),
  },
  {
    guard: AuthGuard,
    path: '/questions',
    component: lazy(() => import('./views/Questions')),
  },
  {
    guard: AuthGuard,
    path: '/subject/create',
    component: lazy(() => import('./views/SubjectCreate')),
  },
  {
    guard: AuthGuard,
    path: '/subject/:id',
    component: lazy(() => import('./views/Subject')),
  },
  {
    guard: AuthGuard,
    path: '/questions/:id',
    component: lazy(() => import('./views/Questions')),
  },
  {
    guard: AuthGuard,
    path: '/question/create/:id',
    component: lazy(() => import('./views/QuestionCreate')),
  },
  {
    guard: AuthGuard,
    path: '/question/edit/:id',
    component: lazy(() => import('./views/QuestionEdit')),
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
                exact
                key={i}
                path={route.path}
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
