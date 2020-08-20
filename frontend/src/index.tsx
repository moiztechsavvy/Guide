import React from 'react'
import ReactDOM from 'react-dom'
import NavBar from './components/NavBar'
import Routes from './components/Routes'
import * as serviceWorker from './functions/serviceWorker'

ReactDOM.render(
    <React.StrictMode>
      <NavBar />
      <Routes />
    </React.StrictMode>,
    document.getElementById('root')
)

serviceWorker.unregister()
