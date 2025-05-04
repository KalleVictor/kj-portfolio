import './App.css';
import { Routes, Route, Navigate } from 'react-router';
import { lazy, Suspense } from 'react';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';

// Lazy-load non-critical components
const About = lazy(() => import('./pages/About'));
const Projects = lazy(() => import('./pages/Projects'));
const Contact = lazy(() => import('./pages/Contact'));
const NoPages = lazy(() => import('./pages/NoPages'));
const Testimonials = lazy(() => import('./pages/Testimonals'));

// Styled loading spinner for Suspense fallback
const LoadingSpinner = () => (
  <div style={{ textAlign: 'center', padding: '50px' }}>
    <div
      className="spinner"
      style={{
        border: '4px solid #f3f3f3',
        borderTop: '4px solid #3498db',
        borderRadius: '50%',
        width: '40px',
        height: '40px',
        animation: 'spin 1s linear infinite',
        margin: '0 auto',
      }}
    ></div>
    <style>{`
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `}</style>
    <span style={{ display: 'none' }} aria-live="polite">
      Loading content...
    </span>
  </div>
);

function App() {
  return (
    <div className="App">
      <Header />
      <main tabIndex={-1}>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NoPages />} />
          </Routes>
          <Testimonials />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;