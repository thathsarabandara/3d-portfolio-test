import React, { useState, useEffect, useRef } from 'react';
import './MusicPage.css';

function MusicPage() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [volume, setVolume] = useState(1); // volume state
    const audioRef = useRef(null); // ref for the audio element
    const barsRef = useRef([]); // Ref for storing bar elements

    // Toggle play/pause
    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    // Toggle mute/unmute
    const toggleMute = () => {
        if (isMuted) {
            audioRef.current.muted = false;
        } else {
            audioRef.current.muted = true;
        }
        setIsMuted(!isMuted);
    };

    // Handle volume change
    const handleVolumeChange = (e) => {
        setVolume(e.target.value);
        audioRef.current.volume = e.target.value;
    };

    // Function to smoothly update equalizer heights
    const updateEqualizer = () => {
        barsRef.current.forEach(bar => {
            // Random height between 10px and 200px
            const randomHeight = Math.floor(Math.random() * 30) + 10;
            
            // Using CSS transition for smooth height change
            bar.style.height = `${randomHeight}px`;
        });
    };

    // Use useEffect to start the equalizer when the audio starts playing
    useEffect(() => {
        let interval;

        if (isPlaying) {
            interval = setInterval(updateEqualizer, 100); // Update every 100ms
        } else {
            clearInterval(interval); // Clear interval when paused
        }

        return () => clearInterval(interval); // Clean up interval on unmount or when playback stops
    }, [isPlaying]);

    return (
        <div className="musicpage">
            <div className="first row">
                <div className="col1">
                    <p className="white onboard">ON BOARD TIME: 10:10</p>
                    <p className="white hazard">HAZARD ALERT! PLEASE BEWARE OF IT</p>
                </div>
                <div className="col2">
                    <p className="white musictitle">royal-entry-cyberpunk-music-230630........</p>
                    <button className="playbutton" onClick={togglePlay}>
                        {isPlaying ? (
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg">
                                <rect x="3" y="2" width="4" height="12"></rect>
                                <rect x="9" y="2" width="4" height="12"></rect>
                            </svg>
                        ) : (
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg">
                                <polygon points="3,2 13,8 3,14"></polygon>
                            </svg>
                        )}
                    </button>
                    <button className="speakerbutton" onClick={toggleMute}>
                        {isMuted ? (
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg">
                                <polygon points="2,5 6,2 6,14 2,11"></polygon>
                                <line x1="10" y1="5" x2="14" y2="11" stroke="white" strokeWidth="2"></line>
                                <line x1="10" y1="11" x2="14" y2="5" stroke="white" strokeWidth="2"></line>
                            </svg>
                        ) : (
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg">
                                <polygon points="2,5 6,2 6,14 2,11"></polygon>
                                <path d="M9,6 Q12,8 9,10" stroke="white" strokeWidth="2" fill="none"></path>
                                <path d="M11,4 Q15,8 11,12" stroke="white" strokeWidth="2" fill="none"></path>
                            </svg>
                        )}
                    </button>
                    <input
                        type="range"
                        id="volumeControl"
                        min="0"
                        max="1"
                        step="0.1"
                        value={volume}
                        onChange={handleVolumeChange}
                    />
                </div>
                <div className="col3">
                    <p className="white power">Station Power: 80%</p>
                    <p className="white oxygen">Oxygen: 40%</p>
                    <p className="white env">Environment: Critical</p>
                </div>
            </div>
            <div className="second">
                <div className="console">
                    <div className="l1">
                        <div className="outerbox">
                            <div className="innerbox"></div>
                        </div>
                        <p className="white console">Console - Cyberspace</p>
                    </div>
                    <div className="horizentalline"></div>
                    <div className="l2">
                        <div className="verticalline"></div>
                        <div className="consolebox">
                            <p className="white front">Front Loading .........</p>
                            <p className="white shield">Shield Operating .........</p>
                            <p className="white power">Power Saving .........</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="third row">
                <div className="last1"></div>
                <div className="last2">
                    {/* Create bars using map, and add refs */}
                    {Array.from({ length: 40 }).map((_, index) => (
                        <div key={index} ref={(el) => (barsRef.current[index] = el)} className="bar"></div>
                    ))}
                </div>
                <div className="last3"></div>
            </div>

            {/* Audio element */}
            <audio ref={audioRef} src="your-audio-file.mp3" />
        </div>
    );
}

export default MusicPage;
