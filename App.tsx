import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { About } from './pages/About';
import { Contact } from './pages/Contact';

// Scroll to top helper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen relative font-sans text-scientific-textDark selection:bg-scientific-emerald selection:text-white">
        
        {/* Fixed Background Texture - Handled in index.html, but overlay here for extra depth if needed */}
        <div className="fixed inset-0 bg-dna-pattern pointer-events-none opacity-40 z-0" />
        
        <Navbar />
        
        <main className="flex-grow z-10 relative">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        
        <div className="z-10 relative">
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;