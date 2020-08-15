import React from 'react'
import Appointments from '../../components/Appointments'
import Footer from '../../components/Footer'
import DoctorData from '../../../TestRequests/doctor.json'

function Doctor() {
    return(
        <div className='doctor'>
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

export default Doctor