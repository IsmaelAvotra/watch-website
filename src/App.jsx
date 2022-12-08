import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'

import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'
import WatchDetails from './pages/WatchDetails'

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/watch/:id' element={<WatchDetails />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
