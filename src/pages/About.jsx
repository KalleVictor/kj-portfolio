import React, { useState } from 'react';
import profilbild from '../assets/images/profilbild6.jpg'

const Card = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => setExpanded(!expanded);

  return (

    <div className="card-swipe-wrapper">
      <div className="card">
      <div className="CardTitle"><h1>About Me</h1></div>
      <p>
        I'm a Game Designer and Full-Stack Developer based in Sweden, with a background in Game Development, History, Creative Writing, and IT. <button className="expand-button" onClick={toggleExpand}>
        {expanded ? '🡅' : '🡇'}
      </button>
      </p>

      {expanded && (
        <>
      <div className="container2">
        <img src={profilbild} alt="logo" className="profilBild" />
        <p className="wrapped-text">
          Inspired by the worlds of <em>Conan</em>, <em>Lord of the Rings</em>, and <em>Dune</em>—as well as classic RPGs and tabletop games—I’ve spent over a decade turning imagination into interactive experiences, from designing games to exclusive playtesting. When I’m not coding or creating, I’m writing songs, enjoying nature, or working on DIY projects. Currently, I’m studying Fullstack Development at Lexicon Malmö.
        </p>
      </div>
        </>
      )}
    </div>
    </div>

  );
};

export default Card;