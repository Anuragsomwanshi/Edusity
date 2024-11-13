import React from 'react'
import "./About.css"
import about_img from "../../assets/about.png"
import play_icon from "../../assets/play-icon.png"
const About = ({setplayState}) => {
  return (
    <div className='About'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img' />
            <img src={play_icon} alt="" className='play-icon' onClick={()=>
                {setplayState(true)}} />
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nuturing Tomarrow's Leaders Today</h2>
            <p> Embarbk on  a transformative educational journey with our UNIVERSITY
                Lorem ips
            </p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, architecto non maxime dolore mollitia commodi repellat quam reprehenderit soluta, accusamus itaque numquam dolorum facere.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia excepturi facere quibuidem consequatur id dignissimos distinctio earum praesentium accusamus dolor! Facilis.</p>
        </div>
        </div>
  )
}

export default About