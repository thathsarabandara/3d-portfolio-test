import React from 'react';
import './NavBtn.css';
import soundFile from '../../assets/hover.mp3'
import { Howl } from 'howler';
import clickFile from '../../assets/transistion.mp3';
import { useNavigate } from 'react-router-dom';

// Props-based NavBtn Component
function NavBtn({ 
  text = 'Home', // Default text for the button
  iconClass = 'fa fa-home', // Default icon class
  onMouseEnterAction,
  to // Function to execute on mouse enter
}) {
  const navigate = useNavigate();
  // Function to handle mouse enter event
  const handleMouseEnter = () => {
    if (onMouseEnterAction) {
      onMouseEnterAction(); // Execute the passed action
    }
    if (soundFile) {
      const audio = new Howl({
        src: [soundFile],
        volume: [0.1],
      });
      audio.play();
    }
  };

  const clickHandler = () =>{
    if (clickFile) {
      const audio = new Howl({
        src: [clickFile],
        volume: [0.1],
      });
      audio.play();
    }
    if(to){
      navigate(to);
    }
  }

  return (
    <div className="side-btn" onMouseEnter={handleMouseEnter} onClick={clickHandler}>
      <div className="big-text-part">
        <div className="dec-row">
          <div className="triangle1"></div>
          <div className="rectangle"></div>
          <div className="triangle2"></div>
        </div>
        <div className="sub-row"></div>
        <div className="text-row">
          <h2 className="text">{text}</h2>
        </div>
        <div className="sub-row"></div>
        <div className="dec-row">
          <div className="rectangle2"></div>
          <div className="triangle3"></div>
          <div className="triangle4"></div>
          <div className="rectangle3"></div>
        </div>
      </div>

      <div className="icon-part">
        <i className={iconClass} aria-hidden="true"></i>
      </div>
    </div>
  );
}

export default NavBtn;
