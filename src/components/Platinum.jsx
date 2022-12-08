import React from 'react'
import './Platinum.css'
import plat from '../assets/plat.svg'

const Platinum = () => {
  return (
    <div className='platinum'>
      <div className='left'>
        <img src={plat} alt='promotion' />
      </div>
      <div className='right'>
        <h1>Sale up to 75% Off !</h1>
        <h2>Platinum Design</h2>
        <p>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual.
        </p>
        <button className='btn'>shop now</button>
      </div>
    </div>
  )
}

export default Platinum
