import React from 'react';

import SlideShow from '../../components/swiper';
import Footer from '../../components/footer/footer'
import Navbar from '../../components/navbar/navbar';

import './about.css';
import TopImage from '../../assets/group-young-colleagues-giving-each-other-high-five.jpg';
import BottomImage from '../../assets/students-giving-five.jpg';
import PeopleIcon from '../../assets/icons/People.svg';
import MegaIcon from '../../assets/icons/Megaphone.svg';
import MailIcon from '../../assets/icons/Feedback.svg';
import PersonIcon from '../../assets/icons/Jump.svg';


const About = () => {
  return (
    <main className='aboutPage'>
      <Navbar />
      <div className="aboutHeader">
        <h1>With us, voices have never<br/> been louder</h1>
        <p>We make it easier to speak out your mind.</p>
      </div>
      <section className="body">
        <div className="bodyTop">
          <div className="topImage">
            <img src={TopImage} alt="young colleagues giving each other high five"/>
          </div>
          <div className="topText">
            <q >
            Our mission is to make colleagues happy. Our<br/>
            vision is to make it easier for workers to speak out<br/>
            their minds such that a better work atmosphere is<br/>
            built which will in turn increase productivity rate</q>
          </div>
        </div>

        <div className="bodyBottom">
          <div className="bottomText">
            <h2>What we are known for</h2>
            <div className="textGrid">
              <div className="box">
                <img src={PeopleIcon} alt="people-icon" width='60px'/>
                <h4>Work Atmosphere</h4>
                <p>We help promote a better and safer workplace atmosphere</p>
              </div>
              <div className="box">
                <img src={MegaIcon} alt="speakout-icon" width='60px'/>
                <h4>Freedom</h4>
                <p>Our users are given that freedom to pour out whetever is bothering them.</p>
              </div>
              <div className="box">
                <img src={MailIcon} alt="mail-icon" width='60px'/>
                <h4>Feedback</h4>
                <p>Our users receive adequate feedback during the process of sorting their issues</p>
              </div>
              <div className="box">
                <img src={PersonIcon} alt="happy person-icon" width='60px'/>
                <h4>Happiness</h4>
                <p>We bridge the gap between students, lecturer and the student government</p>
              </div>
            </div>
          </div>
          <div className="bottomImage">
            <img src={BottomImage} alt="young colleagues giving each other high five"/>
          </div>
        </div>

        <div className="images">
        
        </div>
      </section>
      <SlideShow />
      <Footer />
    </main>
  )
}

export default About;