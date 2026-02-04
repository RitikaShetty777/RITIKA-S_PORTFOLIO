// src/components/ProjectsBackground.jsx
import { useEffect } from 'react';
import { config, createFluidState } from '../utils/fluidConfig';

export default function ProjectsBackground() {
  useEffect(() => {
    const state = createFluidState();

    // Later: canvas / animation logic goes here
    console.log('Fluid config:', config);
    console.log('Fluid state:', state);
  }, []);

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: -1,
        background: 'rgba(37, 99, 235, 0.05)', // subtle visual for now
      }}
    />
  );
}
