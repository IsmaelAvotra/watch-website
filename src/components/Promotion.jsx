import React from 'react'
import './Promotion.css'

const Promotion = () => {
  return (
    <div className='promotion'>
      <div className='left-pro'>
        <div className='top'>
          <h1>Flat 33% off</h1>
          <h2>
            On Timex <br /> Watches
          </h2>
          <button className='btn'>buy now</button>
        </div>
        <div className='timer'>
          <div className='days'>
            <h1>10</h1>
            <span>Days</span>
          </div>
          <div className='days'>
            <h1>16</h1>
            <span>Hours</span>
          </div>
          <div className='days'>
            <h1>30</h1>
            <span>Min</span>
          </div>
          <div className='days'>
            <h1>26</h1>
            <span>Sec</span>
          </div>
        </div>
      </div>
      <div className='middle-pro'>
        <div className='top'>
          <div className='digital'>
            <h2>DIGITAL SMART</h2>
            <h1>- WATCH -</h1>
          </div>
        </div>
        <div className='timer'>
          <div className='days'>
            <h1>10</h1>
            <span>Days</span>
          </div>
          <div className='days'>
            <h1>16</h1>
            <span>Hours</span>
          </div>
          <div className='days'>
            <h1>30</h1>
            <span>Min</span>
          </div>
          <div className='days'>
            <h1>26</h1>
            <span>Sec</span>
          </div>
        </div>
      </div>
      <div className='right-pro'>
        <div className='top'>
          <h1>Upto 50% off</h1>
          <h2>
            On Fossil <br /> Watches
          </h2>
          <button className='btn'>buy now</button>
        </div>
        <div className='timer'>
          <div className='days'>
            <h1>10</h1>
            <span>Days</span>
          </div>
          <div className='days'>
            <h1>16</h1>
            <span>Hours</span>
          </div>
          <div className='days'>
            <h1>30</h1>
            <span>Min</span>
          </div>
          <div className='days'>
            <h1>26</h1>
            <span>Sec</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Promotion
