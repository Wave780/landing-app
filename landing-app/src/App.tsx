import React from 'react'
import './App.css'
import './index.css'
import Card from './components/Card';

interface ICard {
  title: string;
  description: string;
}

const  App: React.FC = () => {

  const cards: ICard[] = [
    {
      title: "MISSION",
      description: "To empower individuals and organizations to unlock their full potential by providing innovative, creative, and tailored solutions that inspire growth, foster innovation, and shape a brighter future"
    },
    {
      title: "VISION",
      description: "To empower individuals and organizations to unlock their full potential by providing innovative, creative, and tailored solutions that inspire growth, foster innovation, and shape a brighter future"
    },
    {
      title: "VALUES",
      description: "To empower individuals and organizations to unlock their full potential by providing innovative, creative, and tailored solutions that inspire growth, foster innovation, and shape a brighter future"
    }
  ];


  const navItems: { name: string; href: string }[] = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return(
    <>
       <header>
        <nav className='nav'>
          {navItems.map((item) => (
            <li key={item.name}>
              <a className='nav-link' href={item.href}>{item.name}</a>
            </li>
          ))}
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
          {cards.map(card => (
             <Card 
                key={card.title}
                title={card.title} 
                description={card.description} 
              />
          ))}
        </div>
    </>
      )
}

export default App
