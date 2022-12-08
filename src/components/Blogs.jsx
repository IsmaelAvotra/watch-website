import React from 'react'
import './Blogs.css'
import { blogs } from '../data'

const Blogs = () => {
  return (
    <div className='blogs-section'>
      <div className='heading'>
        <h1>Blog Updates</h1>
        <p>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual.
        </p>
      </div>

      <div className='blogs'>
        {blogs.map(({ id, text, image, date }) => {
          return (
            <div className='blog' key={id}>
              <div className='image'>
                <img src={image} alt='blog' />
              </div>
              <div className='infos'>
                <span>{date}</span>
                <p>{text}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default Blogs
