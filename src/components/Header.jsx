import React, { useState } from 'react';
import { Link } from 'react-router'; // Make sure it's react-router-dom
import { NavLink } from 'react-router'; // Import NavLink for active link styling
import './Header.css';


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="header">
      <h1 className="header-text">Just Another Portfolio</h1>
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