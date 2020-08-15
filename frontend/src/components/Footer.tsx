import React from 'react'
import '../styles/Footer.css'

function Footer() {
    return(
        <footer id='footer'>
          <div className='d-flex'>
            <div className='col'>
              <ul className='footer-list'>
                <li><strong className='title'>Business Name</strong></li>
                <li><a href='/'>Home</a></li>
                <li><a href='/'>Support</a></li>
                <li><a href='/'>About Us</a></li>
                <li><a href='/'>Contact Us</a></li>
              </ul>
            </div>
            <div className='col'>
              <ul className='footer-list'>
                <li><strong className='title'>Policies</strong></li>
                <li><a href='/'>Privacy Policy</a></li>
                <li><a href='/'>Refund Policy</a></li>
                <li><a href='/'>Terms and Conditions</a></li>
              </ul>
            </div>
            <div className='col'>
              <ul className='footer-list'>
                <li><strong className='title'>Follow Us</strong></li>
                <li><a href='/'>Facebook</a></li>
                <li><a href='/'>Instagram</a></li>
                <li><a href='/'>Twitter</a></li>
              </ul>
            </div>
          </div>
          <div className='copy-right'>
            <div className='container'>
              <p>CopyRight @2020</p>
            </div>
          </div>
        </footer>
    )
}

export default Footer