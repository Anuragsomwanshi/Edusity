import React, { useState } from 'react'
import { Navbar } from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import { Testimonials } from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'

const App = () => {

  const [playState,setplayState] = useState(false);
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subtitle = 'OUR PRGRAM' title = 'What We Offer' />
      <Programs/>
      <About setplayState={setplayState} />
      <Title subtitle = 'Gallery' title = 'campus photos' />
      <Campus/>
      <Title subtitle = 'TESTIMONIALS' title = 'What The Student Says' />
      <Testimonials/>
      <Title subtitle = 'Contact US' title = 'Get In Touch' />
      <Contact/>
      <Footer/>
      <VideoPlayer playState={playState} setplayState={setplayState}/>

      </div>
    </div>
  )
}

export default App