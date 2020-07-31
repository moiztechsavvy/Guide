import React from "react"
import { Route, Switch, BrowserRouter } from "react-router-dom"
import PageNotFound from "./PageNotFound"

function Page404() {
    return(
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path="*" component={PageNotFound}/>
                </Switch>
            </BrowserRouter>
        </div>
        )
    }
   
export default Page404