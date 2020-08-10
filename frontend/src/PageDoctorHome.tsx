import React from "react"
import Footer from "./Footer"
import DoctorData from "../TestRequests/doctor.json"

function DoctorHome() {
    return(
        <div className="doctor-home">
            <header>
                <h2 className="welcome">Welcome {DoctorData.firstName} {DoctorData.lastName}</h2>
            </header>
            <button className="add-appointments" type="button">Add Appointments</button>
            <button className="callendy" type="button">Link with Callendy</button>
            <Appointments />
            <Footer />
        </div>
    )
}

function Appointments() {
    let appointments = {}

    if (!DoctorData.appointments.length) {
        appointments = <a className="no-appointments" href="">No appointments</a>
    } else {
        appointments = DoctorData.appointments.map(
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

export default DoctorHome