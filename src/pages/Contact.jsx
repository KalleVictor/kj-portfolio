import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'; // brand icon
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; // solid icon
import profilbild from '../assets/images/profilbild6.jpg'
import { Link, } from 'react-router';

export default function Contact() {
  return (
    <div className="card-swipe-wrapper">
      <div className="card">
      <div className="CardTitle"><h1>Contact</h1></div>
      <p>


        <div className="profileCard">
        <img src={profilbild} alt="KJ" className="profileCardPicture" />
        <h1>Karl-Johan Victor</h1>
        <p className="title">Fullstack Developer, Game Designer</p>
        <p>Lunds University</p>
        <p>
        <Link to=""><FontAwesomeIcon icon={faGithub} size="1x" /> </Link>
        <Link to=""><FontAwesomeIcon icon={faGithub} size="1x" /> </Link>
        <Link to=""><FontAwesomeIcon icon={faLinkedin} size="1x" /> </Link>
        <Link to=""><FontAwesomeIcon icon={faLinkedin} size="1x" /> </Link>
        </p>
        <p><button2>Contact</button2></p>
      </div>


      </p>
      </div>
    </div>
  )
}
