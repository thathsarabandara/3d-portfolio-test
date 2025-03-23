import React, { useEffect, useRef } from 'react';

// Function to run the hacker effect
const runHackerEffect = (element, targetText) => {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let iterations = 0;

  const interval = setInterval(() => {
    if (element.current) {
      element.current.innerText = element.current.innerText
        .split('')
        .map((char, index) => {
          if (index < iterations) {
            return targetText[index];
          }
          return letters[Math.floor(Math.random() * 26)];
        })
        .join('');
    }

    if (iterations >= targetText.length) {
      clearInterval(interval);
    }
    iterations += 1;
  }, 30);

  // Cleanup interval if needed
  return () => clearInterval(interval);
};

const HackerEffect = ({ text }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    if (text && elementRef.current) {
      const cleanup = runHackerEffect(elementRef, text);
      // Cleanup the interval on component unmount
      return cleanup;
    }
  }, [text]); // Re-run the effect when the text changes

  return (
    <h1 className="title" ref={elementRef}>
      {text}
    </h1>
  );
};

export default HackerEffect;
