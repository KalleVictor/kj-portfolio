import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './Projects.css';

import { Pagination } from 'swiper/modules';
import tododonely from '../assets/images/tododonely.png';
import bloodbowl from '../assets/images/bloodbowl.png'
import munamii from '../assets/images/munamii.png'
import { motion } from 'framer-motion';

const projectItems = [
  {
    image: bloodbowl,
    title: 'Blood Bowl - Legendary Edition',
    description: 'Game Designer on Blood Bowl: Legendary Edition, adapting the iconic tabletop game for PC and consoles. Designed core gameplay systems, the AI behaviour and single-player campaign, and new online features. The release was praised by the community for its faithful design.',
    link: 'https://store.steampowered.com/app/58520/Blood_Bowl__Legendary_Edition/',
    linkType: 'steam',
  },
  {
    image: munamii,
    title: 'Munamii Cakery',
    description: 'A sleek website for Munamii Cakery, showcasing their brand and products with an intuitive, mobile-first design.',
    link: 'https://kallevictor.github.io/Munamii-React/',
    linkType: 'website',
  },
  {
    image: tododonely,
    title: 'ToDoDonely App',
    description: 'ToDoDonely is a console-based task manager built with C#, supporting task viewing, adding, editing, and saving.',
    link: 'https://github.com/KalleVictor/ToDoDonelyApp',
    linkType: 'github',
  },

  {
    image: bloodbowl,
    title: 'Blood Bowl - Legendary Edition',
    description: 'Game Designer on Blood Bowl: Legendary Edition, adapting the iconic tabletop game for PC and consoles. Designed core gameplay systems, the AI behaviour and single-player campaign, and new online features. The release was praised by the community for its faithful design.',
    link: 'https://store.steampowered.com/app/58520/Blood_Bowl__Legendary_Edition/',
    linkType: 'steam',
  },
  {
    image: munamii,
    title: 'Munamii Cakery',
    description: 'A sleek website for Munamii Cakery, showcasing their brand and products with an intuitive, mobile-first design.',
    link: 'https://kallevictor.github.io/Munamii-React/',
    linkType: 'website',
  },
  {
    image: tododonely,
    title: 'ToDoDonely App',
    description: 'ToDoDonely is a console-based task manager built with C#, supporting task viewing, adding, editing, and saving.',
    link: 'https://github.com/KalleVictor/ToDoDonelyApp',
    linkType: 'github',
  },

];

export default function Projects() {
  return (
    <div>
      <h1>Worksamples</h1>
      {/* Mobile Swiper */}
      <div className="projects-swiper">
        <Swiper
          modules={[Pagination]}
          spaceBetween={16}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          {projectItems.map((item, index) => (
            <SwiperSlide key={index}>
              <motion.a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <img src={item.image} alt={item.title} className="project-image" />
                <div className="project-info">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </motion.a>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swipe-hint">← swipe →</div>
      </div>

      {/* Desktop Grid */}
      <div className="projects-grid">
        {projectItems.map((item, index) => (
          <motion.a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
          >
            <img src={item.image} alt={item.title} className="project-image" />
            <div className="project-info">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="project-cta">
                {item.linkType === 'steam' && <button className="project-button">View on Steam</button>}
                {item.linkType === 'github' && <button className="project-button">View on GitHub</button>}
                {item.linkType === 'website' && <button className="project-button">Visit Website</button>}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
