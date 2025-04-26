import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Home.css';
import quill from '../assets/images/quill.png';
import notebook from '../assets/images/notebook.png';

export default function Home() {
  const [cardIndex, setCardIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 = left, 1 = right

  const cards = [
    {
      title: 'Hello there!',
      body: (
        <>
          <p>
          I am <strong>Karl-Johan Victor</strong> <em>· Writer · Game Designer · Developer · Creative Technologist ·</em>
          </p>
        </>
      ),
    },
    {
      title: 'Interactive Storyteller',
      body: (
        <>
        <img
          src={notebook}
          className="card-image"
          alt="notebook"
          style={{
            float: 'right',
            marginLeft: '0.5rem',
            position: 'absolute',
            top: '-1rem',
            left: '4rem',
          }}
        />
          <p>Turning concepts into captivating experiences — from games and code to stories and solutions.</p>
        </>
      ),
    },
    {
      title: 'Creative Technologist',
      body: (
        <>
          <p>I build interactive systems and immersive narratives that blur the line between play and purpose.</p>
          <p>From digital fiction to experimental interfaces, my work is all about engagement.</p>
        </>
      ),
    },
    {
      title: 'Collaborative Spirit',
      body: (
        <>
        <img
          src={quill}
          className="card-image"
          alt="quill"
          style={{
            float: 'right',
            marginLeft: '0.5rem',
            position: 'absolute',
            top: '-2rem',
            right: '4rem',
          }}
        />
          <p>Looking for a creative mind who codes? I’m open to freelance gigs and collaborations.</p>
          <p>Let’s build something memorable together.</p>
        </>
      ),
    },
  ];

  const handleNavigate = (dir) => {
    setDirection(dir);
    setCardIndex((prev) =>
      (prev + dir + cards.length) % cards.length
    );
  };

  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
      <div className="card-swipe-wrapper">
        {/* Left hint */}
        <div className="swipe-hint2 left">🡄</div>

        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={cardIndex}
            className="card"
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(e, info) => {
              if (info.offset.x < -50) {
                handleNavigate(1); // swipe left → next card
              } else if (info.offset.x > 50) {
                handleNavigate(-1); // swipe right → previous card
              }
            }}
          >
            <button className="arrow-btn left" onClick={() => handleNavigate(1)}>🡄</button>
            <div className="CardTitle"><h1>{cards[cardIndex].title}</h1></div>
            {cards[cardIndex].body}
            <button className="arrow-btn right" onClick={() => handleNavigate(-1)}>🡆</button>
          </motion.div>
        </AnimatePresence>

        {/* Right hint */}
        <div className="swipe-hint2 right">🡆</div>
      </div>
  );
}
