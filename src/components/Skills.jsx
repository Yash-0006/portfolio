import React from 'react'
import "../styles.scss"
import Images from '../images.js'

export const Skills = () => {
  return (
    <section id='Skills'>
    <div className='skills'>
        <h1>SKILLS</h1>
        <div className='items'>
            <div className='item it1'><p>Frontend : </p>
            <img src={Images.logoHtml} alt='' />
            <img src={Images.logoCss} alt='' />
            <img src={Images.logoJs} alt='' />
            <img src={Images.logoReact} alt='' />
            <img src={Images.logoSass} alt='' />
            </div>
            <div className='item it2'><p>Backend : </p>
            <img src={Images.logoNode} alt='' />
            <img src={Images.logoExpress} alt='' />
            <img className='rest' src={Images.logoRest} alt='' />
            </div>
            <div className='item it3'><p>Databases : </p>
            <img className='mysql' src={Images.logoMysql} alt='' />
            <img src={Images.logoPostges} alt='' />
            </div>
            <div className='item it4'><p>Programming Languages : </p>
            <img src={Images.logoC} alt='' />
            <img src={Images.logoCpp} alt='' />
            </div>
        </div>
    </div>
    </section>
  )
}
