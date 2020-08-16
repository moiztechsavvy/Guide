import React from 'react'
import ReactDOM from 'react-dom'
import Home from './pages/Home'
import * as serviceWorker from './functions/serviceWorker'
import './styles/index.css'

ReactDOM.render(
    <React.StrictMode>
      <Home />
    </React.StrictMode>,
    document.getElementById('root')
)

serviceWorker.unregister()
