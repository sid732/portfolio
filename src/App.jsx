import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import HomePage from './pages/Home';
import ThemeToggle from './components/shared/ThemeToggle';

function App() {
  return (
    <Router>
      <div className="w-full min-h-screen bg-light-bg dark:bg-dark-bg relative transition-colors duration-300">
        <ThemeToggle />
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