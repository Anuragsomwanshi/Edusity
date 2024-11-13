import React from 'react'
import "./Hero.css"
import dark_arrow from "../../assets/dark-arrow.png"
const Hero = () => {
  return (
    <div className='Hero container'>
        <div className="hero-txt">
            <h1>We Ensure better education for a better  world</h1>
            <p>our cutting-edgo curriculum is designed to empower students with  the knowledge, skills
                and experience needed to excel in the dynamic filed of education</p>

                <button className='btn'>Explore More <img src={dark_arrow} alt="" /> </button>
        </div>
    </div>
  )
}

export default Hero