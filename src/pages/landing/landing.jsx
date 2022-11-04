import React from 'react'
import Hero from '../../components/hero-section/hero'
import Navbar from '../../components/navbar/navbar'

import './landing.css'

const Landing = () => {
  return (
    <main className='landing-page'>
      <Navbar />
      <Hero />
    </main>
  )
}

export default Landing