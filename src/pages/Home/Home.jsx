import React, { useState, useEffect, Suspense } from 'react';
import './Home.css';
import PageLoader from '../../loader_component/pageLoader/PageLoader';
import WarShip from '../../3d_component/WarShip';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import LoadingBackgroundMusic from '../../music_component/LoadingBackGroundMusic';
import file from '../../assets/royal_entry.mp3';
import HomeBackgroundMusic from '../../music_component/HomeBackGroundMusic';
function Home() {
  const [text, setText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const words = ['A Passionate Software Eng. Student_','At Faculty of Computing USJ_','FrontEnd Developer_', 'BackEnd Developer_','Mobile Developer_','AI Enthusiast_', 'IOT Enthusiast_'];
  
  const roleFunction = () => {
    let offset = 0;
    let skip_count = 0;
    let forwards = true;
    let skip_delay = 20;
    let speed = 95;
    
    const wordFlick = () => {
      const currentWord = words[currentWordIndex];
      
      const interval = setInterval(() => {
        if (forwards) {
          if (offset >= currentWord.length) {
            skip_count++;
            if (skip_count === skip_delay) {
              forwards = false;
              skip_count = 0;
            }
          }
        } else {
          if (offset === 0) {
            forwards = true;
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
            offset = 0;
          }
        }
        
        const part = currentWord.substr(0, offset);
        setText(part);
        
        if (skip_count === 0) {
          if (forwards) {
            offset++;
          } else {
            offset--;
          }
        }
      }, speed);
      
      return interval;
    };
    
    return wordFlick();
  };

  useEffect(() => {
    const interval = roleFunction();

    setTimeout(() => {
      setIsLoading(false); // After 3 seconds, hide the loader
    }, 3000);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [currentWordIndex]); // Run the effect when the word index changes

  if(isLoading){
    return(
      <PageLoader />
    )
  }

  return (
    <div className='home'>
      <HomeBackgroundMusic musicFile={file} loop={true}/>
      <div className='text-part'>
        <div className='greeting'>
          <h1>Welcome</h1>
        </div>
        <div className='name'>
          <hi>I am Thathsara Bandara</hi>
        </div>
        <div className='name-subtext'>
          Pioneering the Future of Computing as an Innovator at
          the University of Sri Jayewardenepura
        </div>
        <div className='role'>
            <div className="word">_{text}</div>
          </div>
        <div className='brn-area'>
          <div className='hire-me'>Hire Me</div>
          <div className='cv'>Download CV</div>
        </div>
        <div className='icon-area'>
          <div className='icon'>
            <i class="fa-brands fa-github"></i>
          </div>
          <div className='icon'>
          <i class="fa-brands fa-stack-overflow"></i>
          </div>
          <div className='icon'>
            <i class="fa-brands fa-linkedin"></i>
          </div>
          <div className='icon'>
            <i class="fa-brands fa-discord"></i>
          </div>
          <div className='icon'>
            <i class="fa-brands fa-x-twitter"></i>
          </div>
          <div className='icon'>
            <i class="fa-solid fa-envelope"></i>
          </div>
          <div className='icon'>
            <i class="fa-brands fa-facebook"></i>
          </div>
          <div className='icon'>
            <i class="fa-brands fa-instagram"></i>
          </div>
        </div>
      </div>
      <div className='model-part'>
      <Canvas className='warship'>
            <PerspectiveCamera makeDefault position={[-3, 3, 6]} fov={85} />
            <Suspense fallback={null}>
              <ambientLight intensity={0.6} color="#FFD800" />
              <directionalLight 
                intensity={1} 
                color="#FFD700" 
                position={[-5, 5, 150]} 
                castShadow 
              />
              <OrbitControls 
                enableZoom={true} 
                maxPolarAngle={Math.PI /2}  // Limit rotation to horizontal plane
                minPolarAngle={Math.PI / 4}  // Prevent rotation below horizontal plane
              />
              <WarShip />
            </Suspense>
            <Environment preset="sunset" />
          </Canvas>
      </div>
    </div>
  );
}
//Home page 
export default Home;
