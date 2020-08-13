import React from 'react'
import Alert from 'react-bootstrap/Alert'
import Invalidlogin from '../TestRequests/invalidlogin.json'
import './styles/AlertStyle.css'

function ErrorFunction() {
    return(
        <div className='Alert'>
            {Invalidlogin.map(
                (invalid, index) => {
                    return (
                        <Alert variant='danger'>
                          <Alert.Heading>{invalid.message}</Alert.Heading>
                        </Alert>
                    )
                }
            )}    
        </div>
    )
}

export default ErrorFunction
