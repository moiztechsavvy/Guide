import React from 'react'
import Footer from '../components/Footer'
import patientData from '../testrequests/patient.json'

function Patient() {
    return(
        <div className='patient'>
          <header>
            <h2 className='welcome'>Welcome {patientData.firstName} {patientData.lastName}</h2>
          </header>
          <button className='search-derm' type='button'>Search Nearest Dermatologists</button>
          <Footer />
        </div>
    )
}

export default Patient