import React from 'react';

const IconTemperature = props => (
  <svg id="prefix__Light" viewBox="0 0 24 24" {...props}>
    <defs>
      <style>
        {'.prefix__cls-1{fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round}'}
      </style>
    </defs>
    <title>{'temperature-thermometer'}</title>
    <path className="prefix__cls-1" d="M14 16.041V2.5a2 2 0 0 0-4 0v13.541a4 4 0 1 0 4 0z" />
    <circle className="prefix__cls-1" cx={12} cy={19.5} r={1} />
    <path className="prefix__cls-1" d="M12 18.5v-11" />
  </svg>
);

export default IconTemperature;
