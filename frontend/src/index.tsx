import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header'
import Routes from './components/Routes'
import * as serviceWorker from './functions/serviceWorker'
import './styles/index.css'

ReactDOM.render(
    <React.StrictMode>
      <Header />
      <Routes />
    </React.StrictMode>,
    document.getElementById('root')
)

serviceWorker.unregister()
