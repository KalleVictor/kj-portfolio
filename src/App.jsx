import React, { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import NoPages from './pages/NoPages';
import Testimonials from './pages/Testimonials';

function App() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Focus management for hash-based routing
    if (hash) {
      // Extract route name (e.g., 'home' from '#/home')
      const routeName = hash.replace('#/', '');
      // Try to find page-specific content (e.g., <h1> or container with data-route)
      const contentElement =
        document.querySelector(`[data-route="${routeName}"]`) ||
        document.querySelector('main h1') ||
        document.querySelector('main');
      if (contentElement) {
        contentElement.scrollIntoView({ behavior: 'smooth' });
        // Ensure element is focusable
        if (!contentElement.hasAttribute('tabIndex')) {
          contentElement.setAttribute('tabIndex', '-1');
        }
        contentElement.focus({ preventScroll: true });
      }
    } else {
      // Default: focus main and scroll to top
      const main = document.querySelector('main');
      if (main) {
        window.scrollTo(0, 0);
        main.focus({ preventScroll: true });
      }
    }
  }, [pathname, hash]);

  return (
    <div className="App">
      <Header />
      <main tabIndex={-1} id="main-content">
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home data-route="home" />} />
          <Route path="/about" element={<About data-route="about" />} />
          <Route path="/projects" element={<Projects data-route="projects" />} />
          <Route path="/contact" element={<Contact data-route="contact" />} />
          <Route path="/*" element={<NoPages data-route="nopages" />} />
        </Routes>
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;