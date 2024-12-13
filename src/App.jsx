import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';

// Example Components for different routes
import LoadingPage from './pages/Loading/LoadingPage';
import Home from './pages/Home/Home';
import LoadingBackgroundMusic from './music_component/LoadingBackGroundMusic';
import musicFile from './assets/transistion.mp3';
import NavBar from './NavBarComponent/NavBar/NavBar';
import Education from './pages/Education/Education';
import Certification from './pages/Certification/Certification';
import Skill from './pages/Skills/Skill';
import Project from './pages/Projects/Project';
import Contact from './pages/Contact/Contact';
import Controls from './pages/Controls/Controls';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<LoadingWrapper />} />
        <Route path="/home" element={<Home />} />
        <Route path="/education" element={<Education />} />
        <Route path="/certification" element={<Certification />} />
        <Route path="/skills" element={<Skill />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/controls" element={<Controls />} />
      </Routes>
    </Router>
  );
}

function LoadingWrapper() {
  const [loading, setLoading] = useState(true);
  const [playMusic, setPlayMusic] = useState(false); // Control music playback
  const navigate = useNavigate();

  useEffect(() => {
    // Start music playback
    setPlayMusic(true);

    // Set a timer for navigation
    const timer = setTimeout(() => {
      setLoading(false); // Stop showing loading page
      setPlayMusic(false); // Stop music playback
      navigate('/home'); // Navigate to home page
    }, 35000); // 31 seconds

    return () => {
      clearTimeout(timer); // Cleanup timer
      setPlayMusic(false); // Stop music if component unmounts
    };
  }, [navigate]);

  return (
    <>
      {/* Play music during loading */}
      {playMusic && <LoadingBackgroundMusic musicFile={musicFile} loop={false} />}
      
      {/* Show the loading page during the 31 seconds */}
      {loading && <LoadingPage />}
    </>
  );
}

export default App;
