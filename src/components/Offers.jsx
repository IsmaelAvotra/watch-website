import React from 'react'
import './Offers.css'
import off1 from '../assets/off1.svg'
import off2 from '../assets/off2.svg'
import off3 from '../assets/off3.svg'
import off4 from '../assets/off4.svg'

const Offers = () => {
  return (
    <div className='offers'>
      <div className='heading'>
        <h1>Best delicious offers</h1>
        <p>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual.
        </p>
      </div>
      <div className='images'>
        <div className='image'>
          <img src={off1} alt='offers' />
        </div>
        <div className='image'>
          <img src={off2} alt='offers' />
        </div>
        <div className='image'>
          <img src={off3} alt='offers' />
        </div>
        <div className='image'>
          <img src={off4} alt='offers' />
        </div>
      </div>
    </div>
  )
}

export default Offers
