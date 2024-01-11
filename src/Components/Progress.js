
import React, { useState } from 'react';
import '../App.css';

const ProgressBar = ({ value, onChange, label, minValue, maxValue, marks, }) => {
  const [compValue, setCompValue] = useState(value);
  const handleInputChange = (e) => {
    setCompValue(e.target.value);
    onChange(e.target.value)
  }
  return (
    <div className="progress-bar-container">
      <h6>{label}</h6>
      <div className="progress-bar ">
        <input
          className='p-2 mb-4'
          type="number"
          min={minValue}
          max={maxValue}
          value={compValue}
          // onChange={(e) => onChange(parseInt(e.target.value))}
          onChange={handleInputChange}

        />
        <input
          type="range"
          min={minValue}
          max={maxValue}
          value={compValue}
          // onChange={(e) => onChange(parseInt(e.target.value))}
          onChange={handleInputChange}
        />
      </div>

      <div className="slider-marks ">
        {marks &&
          Object.entries(marks).map(([position, label]) => (
            <span className="slider-marks-span" key={position} style={{ left: `calc(${(position / maxValue) * 100}% -50px)`, }}>
              {label}
            </span>
          ))}
      </div>
    </div>
  );
};

export default ProgressBar;

