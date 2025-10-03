import React from 'react';

const SlidingBackground = ({
  imagePath = '/rotatingbg.png',
  slidingSpeed = 120, // seconds per full slide cycle
  opacity = 0.3,
  className = ''
}) => {
  return (
    <div 
      className={`absolute inset-0 overflow-hidden ${className}`}
      style={{ 
        zIndex: -2,
        backgroundColor: '#000011' // Dark space fallback background
      }}
    >
      <div
        className="sliding-bg-container"
        style={{
          animationDuration: `${slidingSpeed}s`,
          opacity: opacity
        }}
      >
        <img
          src={imagePath}
          alt="Cosmic Background"
          className="sliding-bg-image"
          onLoad={(e) => {
            console.log('Sliding background image loaded successfully');
          }}
          onError={(e) => {
            console.log('Failed to load sliding background image:', imagePath);
            // Create a fallback cosmic gradient background
            e.target.style.display = 'none';
            e.target.parentElement.style.background = 'radial-gradient(ellipse at center, rgba(30, 58, 138, 0.8) 0%, rgba(12, 18, 34, 0.9) 50%, rgba(0, 0, 17, 1) 100%)';
            e.target.parentElement.style.backgroundSize = 'cover';
          }}
        />
      </div>
    </div>
  );
};

export default SlidingBackground;
