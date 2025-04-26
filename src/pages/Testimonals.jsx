import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import 'swiper/css';
import 'swiper/css/pagination';
import './Testimonials.css';

const testimonials = [
  {
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    name: 'John Doe',
    title: 'Lead Developer at TechCorp',
    quote: 'Kalle was an incredible team player and problem solver. His designs and ideas elevated every project.',
    link: 'https://github.com/KalleVictor',
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
];

export default function Testimonials() {
  return (
    <div className="testimonials-container">
        <div className="banner"><h1>Testimonials</h1></div>
      {/* Mobile Swiper */}
      <div className="testimonials-swiper">
        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <motion.a
                href={testimonial.link}
                target="_blank"
                rel="noopener noreferrer"
                className="testimonial-card"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
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
              </motion.a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Desktop Grid */}
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
            <motion.a
            key={index}
            href={testimonial.link}
            target="_blank"
            rel="noopener noreferrer"
            className="testimonial-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
                duration: 0.6,
                delay: index * 0.2,
                type: "spring",
                stiffness: 120,
            }}
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
          </motion.a>
        ))}
      </div>
    </div>
  );
}
