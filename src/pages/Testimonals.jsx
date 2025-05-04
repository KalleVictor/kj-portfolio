import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faDiscord } from '@fortawesome/free-brands-svg-icons';
import './Testimonials.css';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const iconMap = {
  GitHub: faGithub,
  LinkedIn: faLinkedin,
  Email: faEnvelope,
  Phone: faPhone,
  Discord: faDiscord,
};

const testimonials = [
  {
    image: 'https://media.licdn.com/dms/image/v2/D4E35AQFYL1jm7-evhQ/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1682062726604?e=1746792000&v=beta&t=VqypGnQ88y1_Yal1y8komP2YLVw045gPisKabIIlmi0',
    name: 'Karl-Johan Victor',
    title: 'Game Designer & Storyteller',
    quote: '"Building meaningful connections fuels my creativity, and I cherish the opportunity to share stories of collaboration through testimonials and referrals."',
    links: [
      { href: 'https://github.com/KalleVictor', alt: 'GitHub' },
      { href: 'https://linkedin.com/in/karl-johan-victor-90197659/', alt: 'LinkedIn' },
      { href: 'https://discordapp.com/users/Enarion', alt: 'Discord' },
      { href: 'tel:+46703152644', alt: 'Phone' },
      { href: 'mailto:karljohan.victor@hotmail.com', alt: 'Email' },

    ],
  },
  {
    image: 'https://media.licdn.com/dms/image/v2/D4E35AQEm3mOWtAIrnA/profile-framedphoto-shrink_100_100/profile-framedphoto-shrink_100_100/0/1729176865014?e=1746313200&v=beta&t=EhzJ6jZTg3Tp6WV13A-glaRPq4hDVVg4LA2Xs0phEKQ',
    name: 'Saïda Mirzoeva',
    title: 'Game Producer',
    quote: '"His knowledge and experience outside the scope of the video game industry is super easily valuable in a multicultural and inclusive team."',
    links: [
      { href: 'https://www.linkedin.com/in/saidasiam/', alt: 'LinkedIn' },
    ],
  },
];

export default function Testimonials() {
  return (
    <div className="testimonials-container">
      <div className="banner">
        <h1>Testimonials</h1>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="testimonial-image"
                loading="lazy"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = require('../assets/images/replacementimage.png');
                }}
              />
            <h3>{testimonial.name}</h3>
            <h4>{testimonial.title}</h4>
            <TypeAnimation
              sequence={[testimonial.quote]}
              wrapper="p"
              speed={50}
              repeat={0}
              className="testimonial-quote"
              cursor={false}
              style={{ minHeight: '80px' }}
            />
                        {testimonial.links && (
              <div className="testimonial-links">
                {testimonial.links.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.alt}
                    className="testimonial-icon"
                  >
                    <FontAwesomeIcon icon={iconMap[link.alt]} size="1x" />
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
