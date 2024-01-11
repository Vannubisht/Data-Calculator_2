import React, { useState } from 'react';

const RadioButtons = () => {
  const [selectedExchange, setSelectedExchange] = useState('');

  const handleExchangeChange = (event) => {
    setSelectedExchange(event.target.value);
  };

  return (
    <div className="radio-buttons-container">
      <label>
        <input
          type="radio"
          value="NSE"
          checked={selectedExchange === 'NSE'}
          onChange={handleExchangeChange}
        />
        NSE
      </label>
      <label>
        <input
          type="radio"
          value="BSE"
          checked={selectedExchange === 'BSE'}
          onChange={handleExchangeChange}
        />
        BSE
      </label>
    </div>
  );
};

export default RadioButtons;