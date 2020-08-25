import React from 'react'
import axios from 'axios'

function Patient(props: any) {
    let userId = props.match.params.userId
    let firstName
    let lastName

    axios
      .get('http://localhost:5000/patient/' + userId)
      .then((respone) => console.log(respone.data))

    return(
        <div className='patient'>
          <header>
            <h2 className='welcome'>Welcome {firstName} {lastName}</h2>
          </header>
          <button className='search-derm' type='button'>Search Nearest Dermatologists</button>
        </div>
    )
}

export default Patient