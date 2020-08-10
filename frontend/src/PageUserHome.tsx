import React from "react"
import Footer from "./Footer"
import UserData from "../TestRequests/user.json"

function UserHome() {
    return(
        <div className="user-home">
            <header>
                <h2 className="welcome">Welcome {UserData.firstName} {UserData.lastName}</h2>
            </header>
            <button className="search-derm" type="button">Search Nearest Dermatologists</button>
            <Appointments />
            <Footer />
        </div>
    )
}

function Appointments() {
    let appointments = {}

    if (!UserData.appointments.length) {
        appointments = <a className="no-appointments" href="">No appointments</a>
    } else {
        appointments = UserData.appointments.map(
            user => {
                <div className="appointment" key={user.id}>{user.firstName} {user.lastName}</div>
            }
        )
    }

    return(
        <div>
            {appointments}
        </div>
    )
}

export default UserHome