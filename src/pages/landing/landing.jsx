import React from 'react'
import { useNavigate } from "react-router-dom";

import HeroImage from '../../assets/landing pg.png'
import Navbar from '../../components/navbar/navbar'

const Landing = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate('/register');
  }

  return (
    <main className='landing-page min-h-screen'>
      <Navbar />
      <section className='herosection w-screen'>
        <div className='hero flex max-w-5xl m-auto items-center'>
          <div className="hero-text w-1/2 flex flex-col justify-center items-start">
            <h1 className='text-5xl font-black leading-snug'><span className='text-white'>SPEAK </span>your <br />mind <span className='text-white'>OUT!</span></h1>

            <p className='mt-12 text-lg'>
              Not sure how to go about that?<br />
              Click on the link below and<br />
              let's help you
            </p>

            <button onClick={handleSubmit} className='px-5 py-3 text-lg rounded mt-8 text-[#FFD280] bg-[#0E2229]'>Get Started</button>
          </div>

          <div className="hero-image w-1/2 h-fill">
            <img src={HeroImage} alt="Preview, side" className='responsive' />
          </div>
        </div>
        <footer className='text-sm text-center text-[#0E2229]'>
          <p>Copyright SpeakOUT &copy; 2022</p>
        </footer>
      </section>
    </main>
  )
}

export default Landing;