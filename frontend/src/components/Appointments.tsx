import React from 'react'

function Appointments(props: any) {
    let appointments = {}

    if (!props.appointments.length) {
        appointments = <a className='no-appointments' href=''>No Appointments</a>
    } else {
        appointments = props.appointments.map((user: any) => {
            <div className='appointment' key={user.id}>{user.firstName} {user.lastName}</div>
        })
    }

    return(
        <div>
          {appointments}
        </div>
    )
}

export default Appointments