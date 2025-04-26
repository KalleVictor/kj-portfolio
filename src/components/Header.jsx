import React, { useState } from 'react';
import { Link, } from 'react-router';
import { NavLink } from 'react-router'; 
import './Header.css';
import PortfolioHeader from '../assets/images/PortfolioHeader.png';


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="header">

      <img src={PortfolioHeader} alt="portfolio" className="portfolio" />

      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>

      <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="./home" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="./about" onClick={toggleMenu}>About</Link></li>
          <li><Link to="./projects" onClick={toggleMenu}>Projects</Link></li>
          <li><Link to="./contact" onClick={toggleMenu}>Contact</Link></li>

        </ul>
      </nav>

      <nav className="nav-desktop">
        <ul>•
          <NavLink to="/home" className={({ isActive }) => isActive ? 'headerbtn active' : 'headerbtn'}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'headerbtn active' : 'headerbtn'}>
            About
          </NavLink>
          <NavLink to="/projects" className={({ isActive }) => isActive ? 'headerbtn active' : 'headerbtn'}>
            Projects
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'headerbtn active' : 'headerbtn'}>
            Contact
          </NavLink>•
        </ul>
      </nav>

    </header>
  );
}