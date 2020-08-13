import React from 'react'
import Footer from './Footer'
import Appointments from './Appointments'
import DoctorData from '../../TestRequests/doctor.json'

function DoctorHome() {
    return(
        <div className='doctor-home'>
          <header>
            <h2 className='welcome'>Welcome {DoctorData.firstName} {DoctorData.lastName}</h2>
          </header>
          <button className='add-appointments' type='button'>Add Appointments</button>
          <button className='callendy' type='button'>Link with Callendy</button>
          <Appointments appointments={DoctorData.appointments}/>
          <Footer />
        </div>
    )
}

export default DoctorHome