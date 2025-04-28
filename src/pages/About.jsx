import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Home.css';
import '../App.css'

import Logic from '../assets/images/logic.svg';
import Personality from '../assets/images/personality.svg';
import AboutMe from '../assets/header/AboutMe.png';
import DidYouKnow from '../assets/images/DidYouKnow.svg'; 
import Quill from '../assets/images/quill.svg'; 
import Passion from '../assets/images/controller.svg'; 
import Explorer from '../assets/images/explorer.svg'; 

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
      link: 'https://kallevictor.github.io/CV/pdf/Alva%20Labs%20Personality%20Test%20Report%20-%20Karl-Johan%20Victor-2.pdf',
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

  const handleCardClick = (index) => {
    if (aboutCards[index].title === 'Did you know?') {
      setShowExtraCards(true);
    }
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleExtraCardClick = (index) => {
    setExtraActive(prev => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

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

  return (
    <div className="card-deck-wrapper">
      <div className="banner2">
        <img src={AboutMe} alt="About" className="TitleImage" />
      </div>

      <div className="card-deck">
        {aboutCards.map((card, index) => {
          const isActive = activeIndex === index;
          const isShaking = shakeAbout[index] || shakeAbout[`hover-${index}`];
          return (
            <motion.div
              key={index}
              className={`card-container2 ${isShaking ? 'shake' : ''}`}
              onClick={() => handleCardClick(index)}
              onMouseEnter={() => handleCardHover(index, true)}
              onMouseLeave={() => handleCardHover(index, false)}
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
                    <img src={card.image} alt={card.title} className="AboutProfilePic" />
                    <div className="CardTitle">
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

      {showExtraCards && (
        <motion.div
          className="card-deck"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {extraCards.map((card, index) => {
            const isFlipped = extraActive[index];
            const isShaking = shakeExtra[`shake-${index}`] || shakeExtra[`hover-${index}`];
            return (
              <motion.div
                key={`extra-${index}`}
                className={`card-container2 ${isShaking ? 'shake' : ''}`}
                onClick={() => handleExtraCardClick(index)}
                onMouseEnter={() => handleExtraCardHover(index, true)}
                onMouseLeave={() => handleExtraCardHover(index, false)}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
                }}
              >
                <motion.div
                  className="card-flip-inner"
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  transition={{ duration: 0.8 }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {!isFlipped ? (
                    <div
                      className="card-face card-front"
                      style={{ backgroundColor: card.frontBg }}
                    >
                      <img src={card.image} alt={card.title} className="AboutProfilePic" />
                      <div className="CardTitle">
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
                      </div>
                    </div>
                  )}
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      )}
    </div>
  );
}