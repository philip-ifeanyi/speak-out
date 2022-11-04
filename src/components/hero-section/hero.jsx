import React from 'react';

import './hero.css'
import HeroImage from '../../assets/landing pg.png'

const Hero = () => {
  return (
    <section>
      <div className='hero'>
        <div className="hero-text">
          <h1><span>SPEAK </span>your <br/>mind <span>OUT!</span></h1>

          <p>
            Not sure how to go about that?<br/>
            Click on the link below and<br/>
            let's help you
          </p>

          <button>Get Started</button>
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