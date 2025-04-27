import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import profilbild from '../assets/images/profilbild6.jpg';
import ContactMe from '../assets/header/Contact.png';
import './Contact.css'; // <-- create this

export default function Contact() {
  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(true);
  };

  return (
    <div className="contact-wrapper">
      <div className="title-image-wrapper">
        <img src={ContactMe} alt="Contact" className= "TitleImage" />
      </div>

      <div className={`content ${showForm ? 'form-active' : ''}`}>
        <div className="profile-card">
          <img src={profilbild} alt="KJ" className="profile-picture" />
          <h1>Karl-Johan Victor</h1>
          <p className="title">Fullstack Developer, Game Designer</p>
          <p>Lunds University</p>
          <div className="social-icons">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
          </div>
          <button2 className="contact-btn" onClick={handleButtonClick}>
            Contact
          </button2>
        </div>

        {showForm && (
          <div className="contact-form">
            <h2>Send me a message!</h2>
            <form action="https://formspree.io/f/your-form-id" method="POST">
              <input type="text" name="name" placeholder="Your Name" required />
              <input type="email" name="email" placeholder="Your Email" required />
              <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
              <button type="submit" className="submit-btn">Send</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
