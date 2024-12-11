import { useState, Suspense } from 'react'
import './App.css'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import BikeGirl from './3d_component/BikeGirl'
import LoadingBackgroundMusic from './music_component/LoadingBackGroundMusic'
import loadingMusic from './assets/loading_background_music.mp3'

function App() {

  return (
    <>
      <LoadingBackgroundMusic musicFile={loadingMusic}/>
      <div className='loading_page'>
      <Canvas>
      <Suspense fallback={null}>
        {/* Ambient light with intensity */}
        <ambientLight intensity={0.6} color="#FFD800" /> {/* Yellow ambient light */}
        
        {/* Directional light to match yellow tones */}
        <directionalLight 
          intensity={1} 
          color="#FFD700" 
          position={[-5, 5, 150]} 
          castShadow 
        />

        {/* Orbit controls to move around */}
        <OrbitControls enableZoom={true} />

        {/* 3D Model */}
        <BikeGirl />
      </Suspense>

      {/* Set background color to yellow and black gradient */}
      <Environment preset='sunset' />
    </Canvas>
      </div>
    </>
  )
}

export default App
