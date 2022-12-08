import React from 'react'
import './Arrivals.css'
import newArrivals from '../data'
import { FaHeart } from 'react-icons/fa'
import { BsStarFill, BsStarHalf } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Arrivals = () => {
  return (
    <div className='arrivals'>
      <div className='heading'>
        <h1>New arrivals</h1>
        <p>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual.
        </p>
      </div>
      <div className='lists'>
        {newArrivals.map(({ name, image, price, oldPrice, id }) => {
          return (
            <Link to={`/watch/${id}`}>
              <div className='article' key={id}>
                <div className='details'>
                  <img src={image} alt='arrivals image' />
                  <div className='bloc'>
                    <h4>{name}</h4>
                    <div className='price'>
                      <span className='prix'>${price}</span>
                      <span className='old-prix'>${oldPrice}</span>
                    </div>
                  </div>
                  <div className='heart'>
                    <FaHeart />
                  </div>
                  <div className='stars'>
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarHalf />
                  </div>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Arrivals
