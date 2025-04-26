import './App.css';
import { Routes, Route, } from 'react-router';
import Home from './pages/Home';
import About from './pages/About';
import Header from './components/Header';
import Footer from './components/Footer';
import Projects from './pages/Projects';
import Contact from './pages/Contact';


function App() {
  return (
    <div className="App">

      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

      </main>

      <Footer />

    </div>
  );
}

export default App;
