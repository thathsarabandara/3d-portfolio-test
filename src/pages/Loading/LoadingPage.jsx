import { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import LoadingBackgroundMusic from '../../music_component/LoadingBackGroundMusic';
import loadingMusic from '../../assets/loading_background_music.mp3';
import Car from '../../3d_component/Car';
import LoadingBar from '../../loader_component/loaderingBar/LoadingBar';
import './LoadingPage.css'

function LoadingPage() {
  return (
    <>
      <LoadingBackgroundMusic musicFile={loadingMusic} />
      <div className="loading_page">
        {/* 3D Model Area */}
        <div className="3d-model">
          <Canvas>
            <PerspectiveCamera makeDefault position={[-3, 2, 2]} fov={85} />
            <Suspense fallback={null}>
              <ambientLight intensity={0.6} color="#FFD800" />
              <directionalLight 
                intensity={1} 
                color="#FFD700" 
                position={[-5, 5, 150]} 
                castShadow 
              />
              {/* OrbitControls with restricted vertical rotation */}
              <OrbitControls 
                enableZoom={false} 
                maxPolarAngle={Math.PI /2}  // Limit rotation to horizontal plane
                minPolarAngle={Math.PI / 4}  // Prevent rotation below horizontal plane
              />
              <Car />
            </Suspense>
            <Environment preset="sunset" />
          </Canvas>
        </div>

        {/* Loading Message Area */}
        <div className="loading-message-area">
          <h1 className="loading-title">Loading...</h1>
          <h6 className="subtext">Tide Up Your seat Belts Cheif</h6>
          <div className="loader">
            <LoadingBar />
          </div>
        </div>
      </div>
    </>
  );
}

export default LoadingPage;
