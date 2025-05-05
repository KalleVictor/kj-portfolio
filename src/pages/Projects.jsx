import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';
import './Testimonials.css';

import tododonely from '../assets/images/tododonely.png';
import bloodbowl from '../assets/images/bloodbowl.png';
import munamii from '../assets/images/munamii.png';
import portfoliopreview from '../assets/images/PortfolioPreview.png'
import curriculumvitae from '../assets/images/CurriculumVitae.png';

const projectItems = [
  {
    image: bloodbowl,
    title: 'Blood Bowl - Legendary Edition',
    description: 'Game Designer on Blood Bowl: Legendary Edition, adapting the iconic tabletop game for PC and consoles. Designed core gameplay systems, the AI behaviour and single-player campaign, and new online features. The release was praised by the community for its faithful design.',
    link: 'https://store.steampowered.com/app/58520/Blood_Bowl__Legendary_Edition/',
    linkType: 'steam',
    alt: 'Screenshot of Blood Bowl - Legendary Edition over at Steam.'
  },
  {
    image: portfoliopreview,
    title: 'Portfolio Project',
    description: 'My Portfolio, crafted with React, highlighting my Fullstack expertise.',
    link: 'https://github.com/KalleVictor/kj-portfolio',
    linkType: 'github',
    alt: 'Screenshot of my Portfolio website.'
  },
  {
    image: curriculumvitae,
    title: 'Curriculum Vitae',
    description: 'My Curriculum Vitae, crafted with HTML, CSS, and JavaScript, highlighting my expertise and design skills.',
    link: 'https://github.com/KalleVictor/cv',
    linkType: 'github',
    alt: 'Screenshot of the CV website.'
  },
  {
    image: munamii,
    title: 'Munamii Cakery',
    description: 'A sleek website for Munamii Cakery, showcasing their brand and products with an intuitive, mobile-first design.',
    link: 'https://kallevictor.github.io/Munamii-React/',
    linkType: 'website',
    alt: 'Tumbnail of Munamii Cakery Website'
  },
  {
    image: tododonely,
    title: 'ToDoDonely App',
    description: 'ToDoDonely is a console-based task manager built with C#, supporting task viewing, adding, editing, and saving.',
    link: 'https://github.com/KalleVictor/ToDoDonelyApp',
    linkType: 'github',
    alt: 'Thumbnail of the ToDoDonely App.'
  },
];

export default function Projects() {
  return (
    <div className="projects-container">
      <div className="mainBanner">
        <h>Worksamples</h>
      </div>
      <div className="projects-grid">
        {projectItems.map((item, index) => (
          <motion.a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: index * 0.6, type: "spring", stiffness: 120 }}
          >
            <img src={item.image} alt={item.alt} className="project-image" loading="lazy" />
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
