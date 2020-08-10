import React from "react"
import Footer from "./Footer"
import DoctorData from "../TestRequests/doctor.json"

function DoctorHome() {
    return(
        <div className="doctor-home">
            <header>
                <h2 className="welcome">Welcome {DoctorData.firstName} {DoctorData.lastName}</h2>
            </header>
            <button className="add-appointment" type="button">Add Appointment</button>
            <button className="callendy" type="button">Link with Callendy</button>
            <Footer />
        </div>
    )
}

export default DoctorHome