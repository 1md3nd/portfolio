import React from 'react';
import { Box } from '@mui/material';
import DrivingCar from './Projects/DrivingCar';
function Welcome() {
  return (
    <div className='welcome' style={{ height: `var(--baseline-8x)`, borderLeft: `var(--border)`, borderBottom: `var(--border)` }}>
      <DrivingCar />
    </div>
  );
}

export default Welcome;
