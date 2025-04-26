import React from 'react'
import './Footer.css';
import github from '../assets/images/github.png';
import linkedin from '../assets/images/linkedin.png';
import cv from '../assets/images/cv.png';
// Add other icons as needed



const socialLinks = [
  {
    href: 'https://kallevictor.github.io/CV/',
    alt: 'GitHub',
    image: github,
  },
  {
    href: 'https://www.linkedin.com/in/karl-johan-victor-90197659/',
    alt: 'LinkedIn',
    image: linkedin,
  },
  {
    href: 'https://kallevictor.github.io/CV/',
    alt: 'CV',
    image: cv,
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
            >
              <img src={link.image} alt={link.alt} />
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
}