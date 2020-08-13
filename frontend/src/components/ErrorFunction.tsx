import React from 'react'
import { Alert } from 'react-bootstrap'
import InvalidLogin from '../../TestRequests/invalidlogin.json'
import '../styles/AlertStyle.css'

function ErrorFunction() {
    return(
        <div className='alert'>
          <Alert bsStyle='danger'>
            <h4>{InvalidLogin.message}</h4>
          </Alert>
        </div>
    )
}

export default ErrorFunction
