import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router'; 
import './Header.css';
import PortfolioHeader from '../assets/images/PortfolioHeader.png';


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);


  // Close menu on Esc key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          // Determine scroll direction
          if (currentScrollY < lastScrollY || currentScrollY <= 0) {
            // Scrolling up or at top
            setIsHeaderVisible(true);
          } else if (currentScrollY > lastScrollY) {
            // Scrolling down
            setIsHeaderVisible(false);
          }

          setLastScrollY(currentScrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header className={`header ${isHeaderVisible ? 'visible' : 'hidden'}`}>
         <a href="https://kallevictor.github.io/kj-portfolio/" rel="noopener noreferrer">
         <img
          src={PortfolioHeader}
          alt="Karl-Johan Victor portfolio logo"
          className="titleportfolio"
        />
        </a>

      <button className="hamburger" onClick={toggleMenu} aria-expanded={isMenuOpen}
        aria-label="Toggle navigation menu">
        ☰
      </button>

      <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><NavLink 
          to="/home"   
          onClick={() => {
            toggleMenu();
            window.scrollTo(0, 0);
          }}
          className={({ isActive }) => (isActive ? 'burgerbtn active' : 'burgerbtn')}
        >

            Home
            
            </NavLink></li>
          <li><NavLink 
          to="/about" 
          onClick={() => {
            toggleMenu();
            window.scrollTo(0, 0);
          }}
          className={({ isActive }) => (isActive ? 'burgerbtn active' : 'burgerbtn')}
            >

            About

            </NavLink></li>
          <li><NavLink 
          to="/projects"
          onClick={() => {
            toggleMenu();
            window.scrollTo(0, 0);
          }}
          className={({ isActive }) => (isActive ? 'burgerbtn active' : 'burgerbtn')}
            >

            Projects

            </NavLink></li>
          <li><NavLink 
          to="/contact"
          onClick={() => {
            toggleMenu();
            window.scrollTo(0, 0);
          }}
          className={({ isActive }) => (isActive ? 'burgerbtn active' : 'burgerbtn')}
            >

            Contact

            </NavLink></li>
        </ul>
      </nav>

      <nav className="nav-desktop">
        <ul>
          <li>
            <NavLink
              to="/home"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
              className={({ isActive }) => (isActive ? 'headerbtn active' : 'headerbtn')}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
              className={({ isActive }) => (isActive ? 'headerbtn active' : 'headerbtn')}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
              className={({ isActive }) => (isActive ? 'headerbtn active' : 'headerbtn')}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
              className={({ isActive }) => (isActive ? 'headerbtn active' : 'headerbtn')}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}