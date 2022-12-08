import React from 'react'
import './WatchDetails.css'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import newArrivals from '../data'
const WatchDetails = () => {
  // get watch id
  const { id } = useParams()
  // get watch based on id
  const watchFind = newArrivals.find((watch) => {
    return watch.id === parseInt(id)
  })
  return (
    <div className='watch-details'>
      <div className='left-detail'>
        <img src={watchFind.image} />
      </div>
      <div className='right-detail'>
        <h3>{watchFind.name}</h3>
        <div className='price'>
          <span className='right-price'>${watchFind.price}</span>
          <span className='old-price'>${watchFind.oldPrice}</span>
        </div>
        <p className='brand'>
          <span>Brand: </span>
          {watchFind.brand}
        </p>
        <div className='rect'>
          <div className='quantity'>
            <span>-</span>
            <span>1</span>
            <span>+</span>
          </div>
          <div className='add-cart'>
            <button>add to cart</button>
          </div>
        </div>
        <div className='description'>
          <p>{watchFind.description}</p>
        </div>
      </div>
    </div>
  )
}

export default WatchDetails
