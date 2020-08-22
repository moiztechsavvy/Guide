import React from 'react'
import Appointments from '../components/Appointments'
import Footer from '../components/Footer'
import doctorData from '../testrequests/doctor.json'

function Doctor() {
    return(
        <div className='doctor'>
          <header>
            <h2 className='welcome'>Welcome {doctorData.firstName} {doctorData.lastName}</h2>
          </header>
          <button className='add-appointments' type='button'>Add Appointments</button>
          <button className='callendy' type='button'>Link with Callendy</button>
          <Appointments appointments={doctorData.appointments}/>
          <Footer />
        </div>
    )
}

export default Doctor