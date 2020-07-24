import React from 'react'
import { Route, Router, Switch } from 'react-router'

function HeaderNav(){
    return (
        <div>
            <NavBar />
            <Switch>
              <Route exact path="" component={} />   
              <Route exact path="" component={} />
            </Switch>
        </div>
    )
}