import React from 'react'
import '../styles/header.css'

//change the ip in the links to your own so it works for you
function Header() {
    return (
        <div>
          <header>
            <p className='head'>
              <a href = 'http://3.224.66.200:3000/home'>Home</a>
              &nbsp;
              <a href = 'http://3.224.66.200:3000/register'>Register</a>
              &nbsp; 
              <a href = 'http://3.224.66.200:3000/login'>Login</a>
            </p>
          </header>
        </div>
    )
}

export default Header
