import React from 'react'

function Appointments(props: any) {
    let appointments = {}

    if (!props.appointments.length) {
        appointments = <a className='no-appointments' href=''>No Appointments</a>
    } else {
        appointments = props.appointments.map((patient: any) => {
            <div className='appointment' key={patient.id}>{patient.firstName} {patient.lastName}</div>
        })
    }

    return(
        <div>
          {appointments}
        </div>
    )
}

export default Appointments