import React from 'react'
import ReactDOM from 'react-dom'
import Home from './pages/Home'
import * as serviceWorker from './functions/serviceWorker'
import './styles/index.css'
import DemoApp from './calendar'

ReactDOM.render(
    <React.StrictMode>
      <Home />
      <DemoApp />
    </React.StrictMode>,
    document.getElementById('root')
)

serviceWorker.unregister()
