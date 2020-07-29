import React from "react"
import Alert from "react-bootstrap/Alert"
import invalidlogin from "./invalidlogin.json"
import './AlertStyle.css'

function ErrorFunction(){
    return(
        <div className="Alert">
            {invalidlogin.map((invalid, index) => {
                return (
                    <Alert variant="danger">
                        <Alert.Heading>{invalid.message}</Alert.Heading>
                    </Alert>
                )})}    
        </div>
    )
}

export default ErrorFunction
