import React from 'react'
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Patient from '../pages/Patient'
import Doctor from '../pages/Doctor'
import Message404 from './Message404'
import patientData from '../testrequests/patient.json'
import doctorData from '../testrequests/doctor.json'

function Routes() {
    let patientHome = '/patientHome/' + patientData.id
    let doctorHome = '/doctorHome/' + doctorData.id

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
              <Route exact path={patientHome} component={Patient} />
              <Route exact path={doctorHome} component={Doctor} />
              <Route exact path='*' component={Message404} />
            </Switch>
          </BrowserRouter>
        </div>
    )
}

export default Routes