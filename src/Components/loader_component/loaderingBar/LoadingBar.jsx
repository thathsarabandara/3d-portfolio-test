import React from 'react';
import './LoadingBar.css';

function LoadingBar() {
  return (
    <>
      <div className="range" style={{ '--p': 100 }}>
        <div className="range__label">Progress</div>
      </div>
    </>
  );
}

export default LoadingBar;
