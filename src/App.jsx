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
      <div className="w-full min-h-screen bg-[#1a1625] relative">
        <BackgroundEffect />
        <div className="h-full overflow-y-auto">
          <AnimatePresence mode='wait'>
            <Routes>
              <Route path="/" element={<HomePage />} />
            </Routes>
          </AnimatePresence>
        </div>
      </div>
    </Router>
  );
}
export default App;