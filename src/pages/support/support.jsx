import React from 'react'
import Footer from '../../components/footer/footer'
import Navbar from '../../components/navbar/navbar'
import SlideShow from '../../components/swiper'

import './support.css'
import Location from '../../assets/icons/location.svg';
import Mail from '../../assets/icons/mail icon.svg';
import Phone from '../../assets/icons/telephone icon.svg';

const Support = () => {
  return (
    <div className='supportPage'>
      <Navbar />
      <div className="supportHeader">
        <h1>Support</h1>
        <p>With us be rest assured that your voices would be heard.</p>
      </div>
      <main className="supportBody">
        <section className="questions">
          <h2>Frequently Asked Questions(FAQs)</h2>
          <div className="box">
            <h4>Is it free?</h4>
            <p>Of course it is free, you just need to register your accout and you are good to go. Voila!</p>
          </div>
          <div className="box">
            <h4>I can't login</h4>
            <p>Cross check that you have typed in the correct email and password. It's normal, don't be scared</p>
          </div>
          <div className="box">
            <h4>How can I make a complaint</h4>
            <p>Just register and follow the prompts on your screen, we have made it very easy.</p>
          </div>
        </section>
        <aside className="contact">
          <h4>Contact Us</h4>
          <div className="contactInfo">
            <img src={Location} alt="" />
            &nbsp; Suite 4, B2B Avenue, Lagos
          </div>
          <div className="contactInfo">
            <img src={Mail} alt="" />
            <a href="mailto:philipifeanyi17@outlook.com">&nbsp; speakoutng@outlook.com</a>
          </div>
          <div className="contactInfo">
            <img src={Phone} alt="" />
            <a href="tel:+2349073229296">&nbsp; +234 814-555-5555</a>
          </div>
        </aside>
      </main>
      {/* <SlideShow /> */}
      <Footer />
    </div>
  )
}

export default Support