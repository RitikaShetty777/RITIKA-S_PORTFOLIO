// src/utils/fluidConfig.js

export function createFluidState() {
  return {
    lastUpdateTime: Date.now(),
    colorUpdateTimer: 0.0,
  };
}

export const config = {
  SIM_RESOLUTION: 128,
  DYE_RESOLUTION: 1440,
  CAPTURE_RESOLUTION: 512,

  DENSITY_DISSIPATION: 3.5,
  VELOCITY_DISSIPATION: 2,

  PRESSURE: 0.1,
  PRESSURE_ITERATIONS: 20,

  CURL: 10,

  SPLAT_RADIUS: 0.5,
  SPLAT_FORCE: 6000,

  SHADING: true,
  COLOR_UPDATE_SPEED: 10,
  PAUSED: false,

  BACK_COLOR: { r: 0, g: 0, b: 0 },
  TRANSPARENT: true,
};
