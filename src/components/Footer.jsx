import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';

const socialLinks = [
  {
    href: 'https://github.com/KalleVictor',
    alt: 'GitHub',
    icon: faGithub,
  },
  {
    href: 'https://www.linkedin.com/in/karl-johan-victor-90197659/',
    alt: 'LinkedIn',
    icon: faLinkedin,
  },
  {
    href: 'https://kallevictor.github.io/CV/',
    alt: 'CV',
    icon: faFileAlt,
  },
];

export default function Footer() {
  return (
    <div>
      <footer>
        <div className="social-media">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-btn"
              aria-label={link.alt}
            >
              <FontAwesomeIcon icon={link.icon} size="1x" />
            </a>
          ))}
        </div>
        <div className="footer-text">
          <p>Designed by Karl-Johan Victor © 2025</p>
        </div>
      </footer>
    </div>
  );
}
