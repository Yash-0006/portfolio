import React from 'react'
import "../styles.scss"
import Images from '../images.js'

export const Contact = () => {
  return (
    <section id='Contact'>
    <div className='contact'>
        <p>Get in Touch</p>
        <h1>Contact Me</h1>
        <div className='links'>
        <img src={Images.logoMail} alt='' /><a href='mailto:yaswanthgodavarthi0006@gmail.com'>yaswanthgodavarthi0006@gmail.com</a>
        <img src={Images.logoIn} alt='' />   <a href='https://www.linkedin.com/in/yaswanth-godavarthi/'>YaswanthGodavarthi</a>
        </div>
    </div>
    </section>
  )
}
