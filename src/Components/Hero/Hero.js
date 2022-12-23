import React from 'react'
import "./Hero.css"
function Hero() {
  return (
    <div>
      <div className="hero-section">
      <div className="hero-bg">
      <div className="hero-content">
        <h1 className="hero-heading">
          Choose Your Quality Delivery
          <br />Of Car Go
        </h1>
        <p className='hero-para'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia debitis <br /> qui ab, rerum doloribus pariatur.</p>
        <div className="searchdiv">
        <input type="text" placeholder="Enter Your Tracking No" className='hero-search'/> 
        <button className='track-btn'>Track Now</button>
        </div>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Hero
