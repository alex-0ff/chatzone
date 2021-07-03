import React, { useState, useEffect, useRef } from "react";
import AudioControls from "./AudioControls";


const AudioPlayer = ({ tracks }) => {
  // State

  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // Destructure for conciseness
  const { audioSrc } = tracks;

  // Refs
  const audioRef = useRef(new Audio(tracks));
  const intervalRef = useRef();
  const isReady = useRef(false);

  // Destructure for conciseness
  const { duration } = audioRef.current;

  /*const currentPercentage = duration
    ? `${(trackProgress / duration) * 100}%`
    : "0%";*/

  const startTimer = () => {
    // Clear any timers already running
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        return;
      } else {
        setTrackProgress(audioRef.current.currentTime);
      }
    }, [1000]);
  };

  const onScrub = (value) => {
    // Clear any timers already running
    clearInterval(intervalRef.current);
    audioRef.current.currentTime = value;
    setTrackProgress(audioRef.current.currentTime);
  };

  const onScrubEnd = () => {
    // If not already playing, start
    if (!isPlaying) {
      setIsPlaying(true);
    }
    startTimer();
  };
 

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
      startTimer();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  // Handles cleanup and setup when changing tracks
  
  useEffect(() => {
    audioRef.current.pause();

    audioRef.current = new Audio(audioSrc);
    setTrackProgress(audioRef.current.currentTime);

    if (isReady.current) {
      audioRef.current.play();
      setIsPlaying(true);
      startTimer();
    } else {
      // Set the isReady ref as true for the next pass
      isReady.current = true;
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    // Pause and clean up on unmount
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="audio-player">
      <div className="track-info">
        <AudioControls isPlaying={isPlaying} onPlayPauseClick={setIsPlaying} />
        <div className="range__slider">
            <input style={{ background: `linear-gradient(to right, #50299c, #7a00ff ' + 12 + '%, #d3edff ' + 33 + '%, #dee1e2 100%)` }} type="range" value={trackProgress} step="1" min="0" max={duration ? duration : `${duration}`} onChange={(e) => onScrub(e.target.value)} onMouseUp={onScrubEnd} onKeyUp={onScrubEnd} />
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
