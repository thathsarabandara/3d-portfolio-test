import React, { useEffect } from 'react';
import { Howl } from 'howler';

const HomeBackgroundMusic = ({ musicFile, volume = 1, loop = true }) => {
  useEffect(() => {
    const sound = new Howl({
      src: [musicFile],
      loop,
      volume,
    });

    sound.play();

    return () => {
      sound.stop();
    };
  }, [musicFile, loop, volume]);

  return null; // No visual component
};

export default HomeBackgroundMusic;
