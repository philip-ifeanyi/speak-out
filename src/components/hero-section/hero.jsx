import React from 'react';
// import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import './hero.css'
import HeroImage from '../../assets/landing pg.png'

const Hero = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate('/register');
  }

  return (
    <section className='herosection'>
      <div className='hero'>
        <div className="hero-text">
          <h1><span>SPEAK </span>your <br/>mind <span>OUT!</span></h1>

          <p>
            Not sure how to go about that?<br/>
            Click on the link below and<br/>
            let's help you
          </p>

          <button onClick={handleSubmit}>Get Started</button>
        </div>

        <div className="hero-image">
          <img src={HeroImage} alt="Preview, side" className='responsive' />
        </div>
      </div>
      <footer className="footer">
        SpeakOut &copy; 2022
      </footer>
    </section>
  )
}

export default Hero;