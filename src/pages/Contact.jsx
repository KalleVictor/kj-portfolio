import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faTimes } from '@fortawesome/free-solid-svg-icons';
import profilbild from '../assets/images/profilbild.jpg';
import './Contact.css';

export default function Contact() {
  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(true);
  };

  const handleCloseClick = () => {
    setShowForm(false);
  };

  const iconMap = {
    GitHub: faGithub,
    LinkedIn: faLinkedin,
    Discord: faDiscord,
    Phone: faPhone,
    Email: faEnvelope,
  };
  
  const linkData = [
    { type: 'GitHub',   href: 'https://github.com/KalleVictor/' },
    { type: 'LinkedIn', href: 'https://www.linkedin.com/in/karl-johan-victor-90197659/' },
    { type: 'Discord',  href: 'https://discordapp.com/users/Enarion' },
    { type: 'Phone',    href: 'tel:+46703152644' },
    { type: 'Email',    href: 'mailto:karljohan.victor@hotmail.com' },
  ];
  
  const contactLinks = linkData.map(link => ({
    ...link,
    alt: link.type,
    icon: iconMap[link.type],
  }));

  return (
    <div className="contact-wrapper">
      {/* <div className="mainBanner">
        <h>Contact</h>
      </div> */}

      <div className="content">
        <div className={`profile-card ${showForm ? 'flipped' : ''}`}>
          {showForm && (
            <button className="close-button" onClick={handleCloseClick}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
          )}
          {!showForm ? (
            <>
              <img src={profilbild} alt="KJ" className="profile-picture" loading="lazy" />
              <h1>Karl-Johan Victor</h1>
              <p className="title">Fullstack Developer, Game Designer</p>
              <p>Lund University</p>

              <div className="social-icons">
              
              {contactLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon"
                  aria-label={link.alt}
                >
                  <FontAwesomeIcon icon={link.icon} size="1x" className="icon" />
                </a>
              ))}
              
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
