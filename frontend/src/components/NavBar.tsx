import React from 'react'
import '../styles/NavBar.css'

function NavBar() {
    return (
        <div>
          <header>
            <p className='nav-bar'>
              <a href='http://localhost:3000/home'>Home</a>
              &nbsp;
              <a href='http://localhost:3000/login'>Login</a>
              &nbsp;
              <a href='http://localhost:3000/signup'>Signup</a>
            </p>
          </header>
        </div>
    )
}

export default NavBar
