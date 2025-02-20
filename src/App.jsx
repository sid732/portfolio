// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import HomePage from './pages/Home';
// import Experience from './pages/Experience';
// import Projects from './pages/Projects';
// import Skills from './pages/Skills';
// import Contact from './pages/Contact';
import BackgroundEffect from './components/layout/BackgroundEffect';

function App() {
  return (
    <Router>
      <div className="w-full min-h-screen bg-[#1a1625] relative overflow-hidden">
        <BackgroundEffect />
        <AnimatePresence mode='wait'>
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;