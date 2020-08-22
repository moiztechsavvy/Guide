import React from 'react'
import '../styles/NavBar.css'

function NavBar() {
    return (
        <div>
          <header>
            <p className='nav-bar'>
              <a href='/home'>Home</a>
              &nbsp;
              <a href='/login'>Login</a>
              &nbsp;
              <a href='/signup'>Signup</a>
            </p>
          </header>
        </div>
    )
}

export default NavBar
