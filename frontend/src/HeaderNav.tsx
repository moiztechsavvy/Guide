import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import PageNotFound from './components/PageNotFound'

//the componenets one so for now I just put the page not found
function HeaderNav() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                 <Route exact path='' component={PageNotFound} />
                 <Route exact path='' component={PageNotFound} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}
