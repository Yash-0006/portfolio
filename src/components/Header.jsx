import React from 'react'
import "../styles.scss"
import Logo from "../images/Logo.png"
import Images from '../images.js'
import Headroom from "react-headroom"

export const Header = () => {
  return (
    <Headroom>                
    <section>
    <div className='header'>
      <div className='logo'><a href='#Home'><img src={Logo} alt='logo'/></a></div>
      <div className='role'><a href='https://github.com/Yash-0006'><b>React Developer - Yash-0006</b></a><img src={Images.logoGit} alt='' /></div>
      <div className='items'>
        <ul>
        <a href='#Home'><li><b>Home</b></li></a>
        <a href='#Skills'><li><b>Skills</b></li></a>
        <a href='#Projects'><li><b>Projects</b></li></a>
        <a href='#Contact'> <li><b>Contact</b></li></a>
        </ul>
      </div>
    </div>
    </section>
    </Headroom>
  )
}
