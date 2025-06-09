import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import "./App.css";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Work } from "./components/sections/Work";
import { Contact } from "./components/sections/Contact";
import { Souffle } from "./components/sections/Souffle";
import "./index.css";
import "./styles/globals.css";

function ScrollToHash() {
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [location]);
  return null;
}

function App() {
  const [isLoaded, setIsLoaded] = useState(() => {
    // Only show loading screen if not already shown in this browser
    return localStorage.getItem('hasLoadedOnce') === 'true';
  });
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!isLoaded) {
      // Show loading screen, then set flag
      setTimeout(() => {
        setIsLoaded(true);
        localStorage.setItem('hasLoadedOnce', 'true');
      }, 2000); // Adjust duration as needed
    }
  }, [isLoaded]);

  return (
    <Router basename="/">
      <ScrollToHash />
      {!isLoaded ? (
        <LoadingScreen onComplete={() => {
          setIsLoaded(true);
          localStorage.setItem('hasLoadedOnce', 'true');
        }} />
      ) : (
        <>
          <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <Routes>
            <Route path="/" element={
              <>
                <Home />
                <About />
                <Work />
                <Contact />
              </>
            } />
            <Route path="/souffle" element={<Souffle />} />
          </Routes>
        </>
      )}
    </Router>
  );
}

export default App;

