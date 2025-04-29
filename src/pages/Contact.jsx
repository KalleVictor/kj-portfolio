import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faTimes } from '@fortawesome/free-solid-svg-icons';
import profilbild from '../assets/images/profilbild6.jpg';
import ContactMe from '../assets/header/Contact.png';
import './Contact.css';

export default function Contact() {
  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(true);
  };

  const handleCloseClick = () => {
    setShowForm(false);
  };

  return (
    <div className="contact-wrapper">
      <div className="title-image-wrapper">
        <img src={ContactMe} alt="Contact" className="TitleImage" />
      </div>

      <div className="content">
        <div className={`profile-card ${showForm ? 'flipped' : ''}`}>
          {showForm && (
            <button className="close-button" onClick={handleCloseClick}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
          )}
          {!showForm ? (
            <>
              <img src={profilbild} alt="KJ" className="profile-picture" />
              <h1>Karl-Johan Victor</h1>
              <p className="title">Fullstack Developer, Game Designer</p>
              <p>Lund University</p>
              <div className="social-icons">
                <a href="https://github.com/KalleVictor/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} size="lg" className="icon" />
                </a>
                <a href="https://www.linkedin.com/in/karl-johan-victor-90197659/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} size="lg" className="icon" />
                </a>
                <a href="tel:+46703152644" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faPhone} size="lg" className="icon" />
                </a>
                <a href="mailto:karljohan.victor@hotmail.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faEnvelope} size="lg" className="icon"/>
                </a>
              </div>
              <button className="contact-button" onClick={handleButtonClick}>
                Contact
              </button>
            </>
          ) : (
            <div className="contact-form">
              <h2>Send me a message!</h2>
              <form action="https://formspree.io/f/xyzwkzjj" method="POST">
                <input type="text" name="name" placeholder="Your Name" required />
                <input type="email" name="email" placeholder="Your Email" required />
                <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
                <button type="submit" className="submit-btn">Send</button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
