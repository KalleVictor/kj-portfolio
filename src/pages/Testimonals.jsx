import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import './Testimonials.css';


const testimonials = [
  {
    image: 'https://kallevictor.github.io/CV/images/profilbild6.jpg',
    name: 'Karl-Johan Victor',
    title: 'Game Designer & Storyteller',
    quote: '"Building meaningful connections fuels my creativity, and I cherish the opportunity to share stories of collaboration through testimonials and referrals."',
    link: 'https://github.com/KalleVictor',
  },
  {
    image: 'https://media.licdn.com/dms/image/v2/D4E35AQEm3mOWtAIrnA/profile-framedphoto-shrink_100_100/profile-framedphoto-shrink_100_100/0/1729176865014?e=1746313200&v=beta&t=EhzJ6jZTg3Tp6WV13A-glaRPq4hDVVg4LA2Xs0phEKQ',
    name: 'Saïda Mirzoeva',
    title: 'Game Producer',
    quote: '"His knowledge and experience outside the scope of the video game industry is super easily valuable in a multicultural and inclusive team."',
    link: 'https://www.linkedin.com/in/saidasiam/',
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
          <a
            key={index}
            href={testimonial.link}
            target="_blank"
            rel="noopener noreferrer"
            className="testimonial-card"
          >
            <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
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
          </a>
        ))}
      </div>
    </div>
  );
}
