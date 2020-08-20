import React from 'react'
import '../styles/header.css'

function Header() {
    return (
        <div>
          <header>
            <p className='head'>
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

export default Header
