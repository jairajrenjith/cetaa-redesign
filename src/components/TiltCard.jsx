import React from 'react';
import Tilt from 'react-parallax-tilt';

export default function TiltCard({ children, className = "" }) {
  return (
    <Tilt
      perspective={1200}
      scale={1.05}
      glareEnable={true}
      glareMaxOpacity={0.15}
      glareColor="#ffffff"
      glareBorderRadius="2rem"
      transitionSpeed={2500}
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      className={`relative ${className}`}
    >
      {children}
    </Tilt>
  );
}