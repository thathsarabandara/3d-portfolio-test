import React, { useEffect, useRef } from 'react';
import './Education.css';
import Underline from '../../styled_component/underlineComponent/Underline';

// Function to run the hacker effect
const runHackerEffect = (element, targetText) => {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let iterations = 0;

  const interval = setInterval(() => {
    if (element.current) {
      element.current.innerText = element.current.innerText
        .split("")
        .map((char, index) => {
          if (index < iterations) {
            return targetText[index];
          }
          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");
    }

    if (iterations >= targetText.length) {
      clearInterval(interval);
    }
    iterations += 1;
  }, 30);

  // Cleanup interval if needed
  return () => clearInterval(interval);
};

function Education() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  // Trigger hacker effect on component load for both title and subtitle
  useEffect(() => {
    if (titleRef.current) {
      runHackerEffect(titleRef, 'Education');
    }
    if (subtitleRef.current) {
      runHackerEffect(subtitleRef, 'Subtitle');
    }
  }, []);

  // Mouse hover effect
  const handleMouseEnter = () => {
    if (subtitleRef.current) {
      runHackerEffect(subtitleRef, 'Subtitle');
    }
  };

  return (
    <div className='education'>
      <div className='h1-area'>
        <h1 className='title' ref={titleRef}>
          Education
        </h1>
      </div>

      {/* Subtitle section with mouse hover effect */}
      <div className='subtitle-area'>
        <h2
          className='subtitle'
          ref={subtitleRef}
          onMouseEnter={handleMouseEnter}
        >
          Subtitle
        </h2>
      </div>
    </div>
  );
}

export default Education;
