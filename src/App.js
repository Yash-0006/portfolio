import React from 'react';
import "./styles.scss";
import { Header } from './components/Header.jsx';
import { Hero } from './components/Hero.jsx';
import { Skills } from './components/Skills.jsx';
import { Projects } from './components/Projects.jsx';
import { Contact } from './components/Contact.jsx';
import { Footer } from './components/Footer.jsx';

export const App = () => {
  return (
    <div className='app'>
      <Header />
      <Hero />
      <hr />
      <Skills />
      <hr />
      <Projects />
      <hr />
      <Contact />
      <Footer />
    </div>
  );
}
