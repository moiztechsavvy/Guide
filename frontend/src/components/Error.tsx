import React from 'react'
import { Alert } from 'react-bootstrap'
import InvalidLogin from '../testrequests/invalidlogin.json'
import '../styles/AlertStyle.css'

function Error() {
    return(
        <div className='alert'>
          <Alert bsStyle='danger'>
            <h4>{InvalidLogin.message}</h4>
          </Alert>
        </div>
    )
}

export default Error
