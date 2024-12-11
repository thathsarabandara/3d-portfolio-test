import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';

// Example Components for different routes
import LoadingPage from './pages/LoadingPage/LoadingPage';
import Home from './pages/HomePage/Home';
import LoadingBackgroundMusic from './music_component/LoadingBackGroundMusic';
import musicFile from './assets/transistion.mp3';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoadingWrapper />} />
        <Route path="/home" element={<Home />} />
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
