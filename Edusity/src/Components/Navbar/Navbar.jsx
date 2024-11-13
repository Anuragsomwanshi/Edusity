import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import logo from '../../assets/logo.png'
import menu_icon from '../../assets/menu-icon.png'
import {Link} from "react-scroll"
export const Navbar = () => {





  const [sticky,setSticky] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY>500 ?setSticky(true) :setSticky(false)
    })

  },[])

  const [mobileMenu,setmobileMenu] = useState(false);

  const toggleMenu = ()=>{
    mobileMenu?setmobileMenu(false):setmobileMenu(true);

  }
  return (
    <nav className={`container ${sticky? 'dark-nav':''}`}>
        <img src={logo} alt="" className='logo' />
        <ul className={mobileMenu?'':'mobile-menu'}>
            <li><Link to='Hero' smooth={true} offset={0} duration={500} >Home</Link></li>
            <li><Link to='Program' smooth={true} offset={-260} duration={500} >Program</Link></li>
            <li><Link to='About' smooth={true} offset={-150} duration={500} >About us</Link></li>
            <li><Link to='campus' smooth={true} offset={-260} duration={500} >Campus</Link></li>
            <li><Link to='testimonials' smooth={true} offset={-260} duration={500} >Testimonials</Link></li>
            <li> <Link to='contact' smooth={true} offset={-260} duration={500}  className='btn'>ContactUs</Link> </li>
        </ul>

        <img onClick={toggleMenu} src={menu_icon} alt="" className='menu-icon' />
    </nav>
  )
}