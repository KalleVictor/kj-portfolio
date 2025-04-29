import React, { useState } from 'react';
import { motion} from 'framer-motion';
import './Home.css';
import heroimage from '../assets/images/heroimage.png';
import Welcome from '../assets/header/Welcome.png';
import Pin from '../assets/images/pin.png';

export default function Home() {
  const [cardIndex, setCardIndex] = useState(0);
  

  const cards = [
    {
      title: 'Hello there!',
      body: (
        <>
          <p>
          I am <strong>Karl-Johan Victor</strong> <em>· Writer · Game Designer · Developer · Creative Technologist ·</em>
        <img src={heroimage} alt="KJ" className="heroImage" />
          </p>
        </>
      ),
      background: 'rgba(213, 213, 214, 0.9)',
    },
    {
      title: 'Interactive Storyteller',
      body: (
        <>
          <p>Turning concepts into captivating experiences — from games and code to stories and solutions.</p>
        </>
      ),
      background: 'rgba(213, 213, 214, 0.9)',
    },
    {
      title: 'Creative Technologist',
      body: (
        <>
          <p>I build interactive systems and immersive narratives that blur the line between play and purpose.</p>
          <p>From digital fiction to experimental interfaces, my work is all about engagement.</p>
        </>
      ),
      background: 'rgba(213, 213, 214, 0.9)',
    },
    {
      title: 'Collaborative Spirit',
      body: (
        <>
          <p>Looking for a creative mind who codes? I’m open to freelance gigs and collaborations.</p>
          <p>Let’s build something memorable together.</p>
        </>
      ),
      background: 'rgba(213, 213, 214, 0.9)',
    },
    {
      title: 'Programmer',
      body: (
        <>
          <p>01001001 00100000 01100011 01100001 01101110 00100000 01100011 01101111 01100100 01100101 00100000 01100001 00100000 01100010 01101001 01110100</p>
        </>
      ),
      background: 'rgba(213, 213, 214, 0.9)',
    },

  ];


  return (
 
    
    <div className="card-deck">
      <div className="banner2">
        <img src={Welcome} alt="Welcome" className= "TitleImage" />
      </div>
      {cards.map((card, index) => {
        const isActive = index === cardIndex;
        return (
          <motion.div
            key={index}
            className={`card ${isActive ? 'active' : ''}`}
            style={{
              backgroundColor: card.background,
              zIndex: isActive ? 2 : 1,
              transform: isActive ? 'scale(1)' : 'scale(0.8)',
              opacity: isActive ? 1 : 0.4,
            }}
            whileHover={{ y: isActive ? -15 : -5, rotate: isActive ? -4 : 10, opacity: isActive ? 1 : 0.8}}
            transition={{ type: 'spring', stiffness: 600 }}
            onClick={() => setCardIndex(index)}        
          >
            <div className="CardTitleHome">
              <h1>{card.title}</h1>
            </div>
            <div className="CardBody">
            <img src={Pin} alt="Pin" className= "Pin" />{card.body}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
