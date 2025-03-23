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

    // Stop the music after 21 seconds
    const timer = setTimeout(() => {
      sound.stop();
    }, 34000); // 21000 milliseconds = 21 seconds

    return () => {
      // Clean up the timer and stop the music when the component unmounts
      clearTimeout(timer);
      sound.stop();
    };
  }, [musicFile, loop, volume]);

  return null; // No visual component
};

export default LoadingBackgroundMusic;
