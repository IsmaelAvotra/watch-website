import React from 'react'
import Banner from '../components/Banner'
import Brands from '../components/Brands'
import Promotion from '../components/Promotion'
import Arrivals from '../components/Arrivals'
import Platinum from '../components/Platinum'
import Offers from '../components/Offers'
import Blogs from '../components/Blogs'

const Home = () => {
  return (
    <div className='home'>
      <Banner />
      <Brands />
      <Promotion />
      <Arrivals />
      <Platinum />
      <Offers />
      <Blogs />
    </div>
  )
}

export default Home
