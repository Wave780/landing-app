import React from 'react'
import './App.css'
import './index.css'
import Card from './Card';

const  App: React.FC = () => {
  return(
    <>
       <header>
        <nav className='nav'>
        <li>
          <a className='nav-link' href="#home">Home</a>
        </li>
        <li>
        <a className='nav-link' href="#about">About</a>
        </li>
        <li>

        <a className='nav-link' href="#services">Services</a>
        </li>
        <li>

        <a className='nav-link' href="#contact">Contact</a>
        </li>
      </nav>
      </header>
    <div className='div'>

        <div>

          <p className='header'>
           DESIGN YOUR FUTURE
          </p>
          <p className='subtitle'>
          Empowering Innovation, Shaping Tomorrow 
          </p>
          <button className='btn'>Get Started</button>
  
        </div>
       
       
       
    </div>
        <div className="card-container">
      <Card 
      title="MISSION" 
        description="To empower individuals and organizations to unlock their full potential by providing innovative, creative, and tailored solutions that inspire growth, foster innovation, and shape a brighter future" 
      />
      <Card 
        title="VISION" 
        description="To be a global leader in transforming ideas into impactful realities, creating a world where everyone has the tools and confidence to design their own future" 
      />
      <Card 
        title="VALUES" 
        description="Fostering partnerships and teamwork to achieve shared success through collaboration and mutual support" 
      />
        </div>
        
    </>
      )
}

export default App
