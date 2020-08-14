import React from 'react'
import Footer from '../components/Footer'
import PatientData from '../../TestRequests/user.json'

function PatientHome() {
    return(
        <div className='user-home'>
          <header>
            <h2 className='welcome'>Welcome {PatientData.firstName} {PatientData.lastName}</h2>
          </header>
          <button className='search-derm' type='button'>Search Nearest Dermatologists</button>
          <Footer />
        </div>
    )
}

export default PatientHome