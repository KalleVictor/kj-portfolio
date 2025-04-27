import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import './Testimonials.css';

const testimonials = [
  {
    image: 'https://media.licdn.com/dms/image/v2/D4E35AQEm3mOWtAIrnA/profile-framedphoto-shrink_100_100/profile-framedphoto-shrink_100_100/0/1729176865014?e=1746313200&v=beta&t=EhzJ6jZTg3Tp6WV13A-glaRPq4hDVVg4LA2Xs0phEKQ',
    name: 'Saïda Mirzoeva',
    title: 'Game Producer',
    quote: 'His knowledge and experience outside the scope of the video game industry is super easily valuable in a multicultural and inclusive team.',
    link: 'https://www.linkedin.com/in/saidasiam/',
  },
  {
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    name: 'Jane Smith',
    title: 'Product Manager at InnovateX',
    quote: 'Creative, reliable, and technically brilliant. I would work with Kalle again without hesitation!',
    link: 'https://github.com/KalleVictor',
  },
  {
    image: 'https://randomuser.me/api/portraits/men/55.jpg',
    name: 'David Johnson',
    title: 'Game Designer at PlayVerse',
    quote: 'Kalle brought passion and energy to every project, pushing the boundaries of design and gameplay.',
    link: 'https://github.com/KalleVictor',
  },
  {
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
    name: 'Emily Brown',
    title: 'UX Designer at PixelPerfect',
    quote: 'An incredible eye for detail and a deep understanding of user needs. A truly valuable asset to any team.',
    link: 'https://github.com/KalleVictor',
  },
  {
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
    name: 'Emily Brown',
    title: 'UX Designer at PixelPerfect',
    quote: 'An incredible eye for detail and a deep understanding of user needs. A truly valuable asset to any team.',
    link: 'https://github.com/KalleVictor',
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
