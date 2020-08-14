import React from 'react'
import ReactDOM from 'react-dom'
import Modal from './pages/Modal'
import * as serviceWorker from './functions/serviceWorker'
import './styles/index.css'

ReactDOM.render(
    <React.StrictMode>
      <Modal />
    </React.StrictMode>,
    document.getElementById('root')
)

serviceWorker.unregister()
