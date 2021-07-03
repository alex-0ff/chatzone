import React from "react";

const AudioControls = ({
  isPlaying,
  onPlayPauseClick,
}) => (
  
  <div className="audio-controls">
    {isPlaying ? (
      <button type="button" className="svg-link" onClick={() => onPlayPauseClick(false)} aria-label="Pause">
        <svg className="fa-secondary" fill="currentcolor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M200 160C186.8 160 176 170.8 176 184v144C176 341.3 186.8 352 200 352S224 341.3 224 328v-144C224 170.8 213.3 160 200 160zM312 160C298.8 160 288 170.8 288 184v144c0 13.25 10.75 24 24 24s24-10.75 24-24v-144C336 170.8 325.3 160 312 160zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464z"/>
        </svg>
      </button>
    ) : (
      <button type="button" className="svg-link" onClick={() => onPlayPauseClick(true)} aria-label="Play">
        <svg className="fa-secondary" fill="currentcolor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M228.5 147.5C224.7 145.2 220.3 144 216 144C202.2 144 192 155.3 192 168v176c0 12.8 10.31 24 24 24c4.344 0 8.68-1.18 12.52-3.523l144-88C379.6 272.1 384 264.4 384 256c0-8.359-4.352-16.12-11.48-20.48L228.5 147.5zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464z"/>
        </svg>
      </button>
    )}
  </div>
);

export default AudioControls;