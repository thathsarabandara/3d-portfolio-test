import React, { useEffect } from 'react';
import { Howl } from 'howler';

const LoadingBackgroundMusic = ({ musicFile, volume = 0.5, loop = true }) => {
  useEffect(() => {
    const sound = new Howl({
      src: [musicFile],
      loop,
      volume,
    });

    // Play the music when the component mounts
    sound.play();

    return () => {
      // Stop the music when the component unmounts
      sound.stop();
    };
  }, [musicFile, loop, volume]);

  return null; // No visual component
};

export default LoadingBackgroundMusic;
