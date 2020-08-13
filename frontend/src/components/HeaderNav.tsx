import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Message404 from './Message404'

//the components one so for now I just put the page not found
function HeaderNav() {
    return (
        <div>
          <BrowserRouter>
            <Switch>
              <Route exact path='' component={Message404} />
              <Route exact path='' component={Message404} />
            </Switch>
          </BrowserRouter>
        </div>
    )
}
