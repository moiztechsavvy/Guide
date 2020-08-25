import React from 'react'
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Patient from '../pages/Patient'
import Doctor from '../pages/Doctor'
import Message404 from './Message404'

function Routes() {
    return (
        <div>
          <BrowserRouter>
            <Switch>
              <Route exact path="/">
                <Redirect to='/home' />
              </Route>
              <Route exact path='/home' component={Home} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/signup' component={Signup} />
              <Route exact path='/patient/:userId' component={Patient} />
              <Route exact path='/doctor/:userId' component={Doctor} />
              <Route exact path='*' component={Message404} />
            </Switch>
          </BrowserRouter>
        </div>
    )
}

export default Routes