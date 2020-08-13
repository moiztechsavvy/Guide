import React from 'react'
import Alert from 'react-bootstrap/Alert'
import InvalidLogin from '../../TestRequests/invalidlogin.json'
import '../styles/AlertStyle.css'

function ErrorFunction() {
    return(
        <div className='alert'>
          <Alert variant='danger'>
            <Alert.Heading>{InvalidLogin.message}</Alert.Heading>
          </Alert>
        </div>
    )
}

export default ErrorFunction
