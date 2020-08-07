import React from "react"
import Footer from "./Footer"

function PageUserHome(props: any) {
    return(
        <div className="user-home">
            <header>
                <h2 className="welcome">Welcome {props.name}</h2>
            </header>
            <button className="callendy" type="button">Link with Callendy</button>
            <div className="appointments">
                <a className="no-appointments" href="">No appointments</a>
            </div>
            <Footer />
        </div>
    )
}

export default PageUserHome