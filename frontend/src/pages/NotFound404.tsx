import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Message404 from '../components/Message404'

function NotFound404() {
    return(
        <div>
          <BrowserRouter>
            <Switch>
              <Route path='*' component={Message404}/>
            </Switch>
          </BrowserRouter>
        </div>
    )
}
   
export default NotFound404