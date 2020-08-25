import React from 'react'
import ReactDOM from 'react-dom'
import NavBar from './components/NavBar'
import Routes from './components/Routes'
import Footer from './components/Footer'
import * as serviceWorker from './functions/serviceWorker'

ReactDOM.render(
    <React.StrictMode>
      <NavBar />
      <Routes />
      <Footer />
    </React.StrictMode>,
    document.getElementById('root')
)

serviceWorker.unregister()
