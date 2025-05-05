import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Home.css';
import '../App.css'
import './About.css';

import Logic from '../assets/images/logic.svg';
import Personality from '../assets/images/personality.svg';
import DidYouKnow from '../assets/images/DidYouKnow.svg'; 
import Quill from '../assets/images/quill.svg'; 
import Passion from '../assets/images/controller.svg'; 
import Explorer from '../assets/images/explorer.svg'; 

import flipSound from '../assets/files/flip.mp3';
import appearSound from '../assets/files/deal.mp3';
import flipbackSound from '../assets/files/flipback.mp3';

export default function About() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [showExtraCards, setShowExtraCards] = useState(false);
  const [extraActive, setExtraActive] = useState({});
  const [shakeAbout, setShakeAbout] = useState({});
  const [shakeExtra, setShakeExtra] = useState({});

  

  const aboutCards = [
    {
      image: Logic,
      title: 'Logical Thinker',
      description: '<strong>Logic ability:</strong> Scored above average (93rd–98th percentile), reflecting strong problem-solving skills and the ability to quickly learn new concepts.',
      link: 'https://kallevictor.github.io/CV/pdf/Alva%20Labs%20Logic%20Test%20Report%20-%20Karl-Johan%20Victor-2.pdf',
      frontBg: 'rgba(213, 213, 214, 0.9)',
      backBg: '#ffffff',
    },
    {
      image: Personality,
      title: 'My Personality',
      description: '<strong>Personality:</strong> Described as collaborative, calm under pressure, and open to new perspectives — suited to creative, team-oriented environments.',
      link: 'https://kallevictor.github.io/CV/pdf/Alva%20Labs%20Personality%20Test%20Report%20-%20Karl-Johan%20Victor-2.pdf',
      frontBg: '#f3f3f3',
      backBg: 'white',
    },
    {
      image: DidYouKnow,
      title: 'Did you know?',
      description: 'As a child, I was inspired by the worlds of Robert E. Howard’s Conan, J.R.R. Tolkien’s Lord of the Rings, and Frank Herbert’s Dune, alongside classic RPGs and tabletop games.',
      link: null,
      frontBg: 'rgba(213, 213, 214, 0.9)',
      backBg: 'white',
    },
  ];

  const extraCards = [
    {
      image: Quill,
      title: 'Creative Designer',
      description: 'From a young age, I channeled this passion into crafting intricate fantasy worlds, characters, and narratives, weaving together rich storytelling with the strategic logic of gameplay.',
      frontBg: '#e3e3e3',
      backBg: '#ffffff',
    },
    {
      image: Passion,
      title: 'Passion for Games',
      description: 'Through years of game design, development, and testing, I’ve brought immersive experiences to life in digital formats, a process I find deeply exhilarating.',
      frontBg: '#d3d3d3',
      backBg: '#ffffff',
    },
    {
      image: Explorer,
      title: 'Explorer at Heart',
      description: 'Driven by a lifelong curiosity for new cultures, technologies, and ideas, I believe the most impactful innovations arise from embracing diverse influences.',
      frontBg: '#f3f3f3',
      backBg: '#ffffff',
    },
  ];

  const playFlipSound = () => {
    const audio = new Audio(flipSound);
    audio.volume = 0.5;
    audio.play();
  };

  const playFlipBackSound = () => {
    const audio = new Audio(flipbackSound);
    audio.volume = 0.5;
    audio.play();
  };
  
  const handleCardClick = (index) => {
    if (activeIndex === index) {
      playFlipBackSound(); // Play flip-back sound if card is already active
    } else {
      playFlipSound(); // Play flip sound if card is not active
      if (aboutCards[index].title === 'Did you know?') {
        setShowExtraCards(true);
      }
    }
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleExtraCardClick = (index) => {
    if (extraActive[index]) {
      playFlipBackSound(); // Play flip-back sound if card is already active
    } else {
      playFlipSound(); // Play flip sound if card is not active
    }
    setExtraActive(prev => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const playAppearSound = () => {
    const audio = new Audio(appearSound);
    audio.play();
  };
  
  useEffect(() => {
    const appearDelay = 200;
    const timer = setTimeout(() => {
      playAppearSound();
    }, appearDelay);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showExtraCards) {
      const appearDelay = 200;
      const timer = setTimeout(() => {
        playAppearSound();
      }, appearDelay);
      return () => clearTimeout(timer);
    }
  }, [showExtraCards]);

  const handleCardHover = (index, isHovering) => {
    setShakeAbout(prev => ({
      ...prev,
      [`hover-${index}`]: isHovering,
    }));
  };

  const handleExtraCardHover = (index, isHovering) => {
    setShakeExtra(prev => ({
      ...prev,
      [`hover-${index}`]: isHovering,
    }));
  };

  useEffect(() => {
    let timers = [];

    if (activeIndex !== null) {
      const timer = setTimeout(() => {
        setShakeAbout(prev => ({
          ...prev,
          [activeIndex]: true,
        }));

        setTimeout(() => {
          playFlipBackSound();
          setActiveIndex(null);
          setShakeAbout(prev => {
            const updated = { ...prev };
            delete updated[activeIndex];
            return updated;
          });
        }, 800); // after shake
      }, 7000);
      timers.push(timer);
    }

    Object.entries(extraActive).forEach(([index, isActive]) => {
      if (isActive) {
        const timer = setTimeout(() => {
          setShakeExtra(prev => ({
            ...prev,
            [`shake-${index}`]: true,
          }));

          setTimeout(() => {
            playFlipBackSound();
            setExtraActive(prev => {
              const updated = { ...prev };
              delete updated[index];
              delete updated[`shake-${index}`];
              return updated;
            });
          }, 800);
        }, 7000);
        timers.push(timer);
      }
    });

    return () => timers.forEach(timer => clearTimeout(timer));
  }, [activeIndex, extraActive]);

  const cardDelays = [0.4, 0.8, 1.2];

  return (
    <div className="card-deck-wrapper">
      <div className="mainBanner">
        <h>About Me</h>
      </div>

      <div className="about-card-deck">
  {[...aboutCards, ...(showExtraCards ? extraCards : [])].map((card, index) => {
    const totalCards = aboutCards.length;
    const isExtra = index >= totalCards;
    const cardIndex = isExtra ? index - totalCards : index;
    const isActive = isExtra ? extraActive[cardIndex] : activeIndex === index;
    const isShaking = isExtra
      ? shakeExtra[`shake-${cardIndex}`] || shakeExtra[`hover-${cardIndex}`]
      : shakeAbout[index] || shakeAbout[`hover-${index}`];

    const handleClick = () =>
      isExtra ? handleExtraCardClick(cardIndex) : handleCardClick(index);

    const handleHover = (hovering) =>
      isExtra
        ? handleExtraCardHover(cardIndex, hovering)
        : handleCardHover(index, hovering);


        
    return (
      <motion.div
        key={index}
        className={`about-card-container ${isActive ? 'is-flipped' : ''} ${isShaking ? 'shake' : ''}`}
        onClick={handleClick}
        onMouseEnter={() => handleHover(true)}
        onMouseLeave={() => handleHover(false)}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.8, delay: cardDelays[index % 3], type: "spring", stiffness: 120 }}
      >
        <motion.div
          className="card-flip-inner"
          animate={{ rotateY: isActive ? 180 : 0 }}
          transition={{ duration: 0.8 }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          {!isActive ? (
            <div
              className="card-face card-front"
              style={{ backgroundColor: card.frontBg }}
            >
              <img src={card.image} alt={card.title} className={`AboutProfilePicFront ${index > 1 ? 'white-svg-filter' : ''}`} />
              <div className="CardTitleAbout">
                <h1>{card.title}</h1>
              </div>
            </div>
          ) : (
            <div
              className="card-face card-back"
              style={{ backgroundColor: card.backBg }}
            >
              <img src={card.image} alt={card.title} className="AboutProfilePic" />
              <div className="CardBody">
                <p dangerouslySetInnerHTML={{ __html: card.description }}></p>
                {card.link && card.title !== 'Did you know?' && (
                  <a
                    href={card.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-link"
                  >
                    <button className="visit-btn">Find out more...</button>
                  </a>
                )}
              </div>
            </div>
          )}
        </motion.div>
      </motion.div>
    );
  })}
</div>
    </div>
  );
}