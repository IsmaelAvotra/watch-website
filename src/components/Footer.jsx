import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

import logo from '../assets/logo.svg'
import fb from '../assets/fb.svg'
import insta from '../assets/insta.svg'
import twit from '../assets/twit.svg'
import google from '../assets/google.svg'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='rows'>
        <div className='row'>
          <img src={logo} alt='logo' />
          <p>
            Lorem Ipsum is simply dummy typesetting industry. a type specimen
            book.
          </p>
          <p>
            Call Us: <span>+00 333 7770</span>
          </p>
          <p>Email: email@watchkart.com</p>
        </div>
        <div className='row discover'>
          <h3>Discover</h3>
          <Link to='/'>
            <p>Make Time For Good</p>
          </Link>
          <Link to='/'>
            <p>About Us</p>
          </Link>
          <Link to='/'>
            <p>Careers</p>
          </Link>
          <Link to='/'>
            <p>Store Locator</p>
          </Link>
        </div>
        <div className='row custom'>
          <h3>Customer Care</h3>
          <Link to='/'>
            <p>Watch Instructions & Care</p>
          </Link>
          <Link to='/'>
            <p>Warranty & Repairs</p>
          </Link>
          <Link to='/'>
            <p>Order Status</p>
          </Link>
          <Link to='/'>
            <p>FAQ</p>
          </Link>
        </div>
        <div className='row'>
          <h3>Newsletter</h3>
          <p>Enter your email and We’ll Send you more infomation.</p>
          <input type='text' placeholder='Email' />
          <textarea placeholder='Message...'></textarea>
        </div>
      </div>
      <div className='last'>
        <p>Watchkart All Right Reserved, 2022</p>
        <div className='socials'>
          <Link to='/'>
            <img src={fb} alt='facebook' />
          </Link>
          <Link to='/'>
            <img src={insta} alt='instagram' />
          </Link>
          <Link to='/'>
            <img src={twit} alt='twitter' />
          </Link>
          <Link to='/'>
            <img src={google} alt='google' />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
