import React, { useEffect, useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { BiSearch, BiHeart, BiUser, BiMenu } from 'react-icons/bi'
import { FaTimes } from 'react-icons/fa'

import Logo from '../assets/logo.svg'

const Header = () => {
  const [showLinks, setShowLinks] = useState(false)

  return (
    <div className='header'>
      <Link to='/'>
        <img src={Logo} alt='logo' className='logo' />
      </Link>

      <ul className={`${showLinks ? 'active' : ''}`}>
        <li>
          <Link to='/'>watches</Link>
        </li>
        <li>
          <Link to='/'>mens</Link>
        </li>
        <li>
          <Link to='/'>womens</Link>
        </li>
        <li>
          <Link to='/'>new arrivals</Link>
        </li>
        <li>
          <Link to='/'>featured</Link>
        </li>
        <li>
          <Link to='/'>sales</Link>
        </li>
      </ul>

      <div className='user'>
        <Link to='/'>
          <BiSearch />
        </Link>
        <Link to='/'>
          <BiHeart />
        </Link>
        <Link to='/'>
          <BiUser />
        </Link>
      </div>
      <div className='menu' onClick={() => setShowLinks(!showLinks)}>
        {!showLinks ? (
          <BiMenu className='menu-btn' />
        ) : (
          <FaTimes className='menu-btn' />
        )}
      </div>
    </div>
  )
}

export default Header
