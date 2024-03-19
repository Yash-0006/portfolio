import React from 'react'
import "../styles.scss"
import Images from '../images.js'

export const Projects = () => {
  return (
    <section id="Projects">
    <div className='projects'>
    <h1 className='heading'>Projects</h1>
        <div className='sides'>
            <div className='projleft'>
                <div className='content'>
                <h1>
                    Listify
                </h1>
                <p>
                Listify is your all-in-one solution for organizing your notes and tasks with ease. Built using React, Listify offers a seamless and intuitive interface, making it effortless to manage your notes on the go
                </p>
                </div>
                    <div><a href='https://yash-0006.github.io/Maps/'><img src={Images.proj2} alt=''/></a></div>
                <div className='content'>
                <h1>
                    Coditor
                </h1>
                <p>
                Coditor is a revolutionary web development tool built with React, designed to simplify the learning process for beginners. With Coditor, aspiring developers can seamlessly write, edit, and preview HTML, CSS, and JavaScript code in real-time, all within a single, intuitive interface
                </p>
                </div>
                <div><a href='https://github.com/Yash-0006/Permalist'><img src={Images.proj4} alt=''/></a></div>
                <div className='content'>
                <h1>
                    Visiting's Tracker
                </h1>
                <p>
                    Visiting's Tracker is a personalized travel tracker application designed to help families document their adventures around the world. Built with PostgreSQL, Express, and Node.js, Visiting's Tracker allows family members to add themselves and mark the countries they've visited on an interactive map interface
                </p>
                </div>
                <div><a href='https://github.com/Yash-0006/Capitals_Quiz'><img src={Images.proj6} alt=''/></a></div>
            </div>
            <div className='projright'>
                <div><a href='https://yash-0006.github.io/Listify_App/'><img src={Images.proj1} alt=''/></a></div>
                <div className='content'>
                <h1>
                    Maps
                </h1>
                <p>
                Mapify is a feature-rich mapping application that brings the power of Google Maps to your fingertips. Developed using JavaScript and APIs, Mapify offers a comprehensive suite of functionalities, including directions, navigation, and real-time traffic data, all within an intuitive and user-friendly interface
                </p>
                </div>
                <div><a href='https://yash-0006.github.io/Coditor/'><img src={Images.proj3} alt=''/></a></div>
                <div className='content'>
                <h1>
                    Permalist
                </h1>
                <p>
                    Permalist is a powerful note-taking application built with PostgreSQL, Express, and Node.js, designed to provide users with a seamless and permanent solution for storing, editing, deleting, and adding notes
                </p>
                </div>
                <div><a href='https://github.com/Yash-0006/Family_VIsit_Tracker'><img src={Images.proj5} alt=''/></a></div>
                <div className='content'>
                <h1>
                    Quiz Master
                </h1>
                <p>
                    QuizMaster is an engaging quiz application developed with JavaScript, Node.js, Express, and PostgreSQL. With QuizMaster, users can challenge their knowledge of countries, capitals, and flags in an interactive and educational quiz experience
                </p>
                </div>
            </div>
        </div>
    </div>
    </section>
  )
}
