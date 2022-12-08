import React, { useState } from 'react'
import './Banner.css'

import img1 from '../assets/1.svg'
import img2 from '../assets/2.svg'
import img3 from '../assets/3.svg'
import rightimg from '../assets/right.svg'
const Banner = () => {
  return (
    <div className='banner'>
      <div className='left'>
        <h1>Up to 50% Off</h1>
        <h2>Super Luxury, Super Watches</h2>
        <p>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual.
        </p>
        <button className='btn'>explore more</button>
        <div className='mini-models'>
          <div>
            <img src={img1} className='image1' />
          </div>
          <div>
            <img src={img2} className='image2' />
          </div>
          <div>
            <img src={img3} className='image3' />
          </div>
        </div>
      </div>
      <div className='right'>
        <div className='image'>
          <img src={rightimg} className='image-right' />
        </div>
      </div>
    </div>
  )
}

export default Banner
