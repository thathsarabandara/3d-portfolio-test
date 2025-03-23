import React, { useEffect, useRef, useState } from 'react';
import './TextReveal.css'; // Importing the CSS file

const TextReveal = ({ text }) => {
  const titleRef = useRef(null);
  const [revealedText, setRevealedText] = useState('');
  const CHAR_TIME = 20;
  let index = 0;

  useEffect(() => {
    if (text) {
      start(text);
    }
  }, [text]);

  const start = (textContent) => {
    setRevealedText('');
    titleRef.current.textContent = '';
    index = 0;
    requestChar(1000, textContent);
  };

  const requestChar = (delay = 0, textContent) => {
    setTimeout(() => addChar(textContent), CHAR_TIME + delay);
  };

  const addChar = (textContent) => {
    const char = document.createElement('span');
    char.classList.add('char');
    char.textContent = '▌';
    titleRef.current.appendChild(char);
    requestCharAnimation(char, textContent.substr(index++, 1));
    if (index < textContent.length) {
      requestChar(0, textContent);
    }
  };

  const requestCharAnimation = (char, value) => {
    setTimeout(() => {
      char.textContent = value;
      char.classList.add('fade-in');
    }, CHAR_TIME);
  };

  return (
    <div className="text-reveal-wrapper">
      <h1 ref={titleRef}>
        {text}
      </h1>
    </div>
  );
};

export default TextReveal;
