// src/InputField.js

import React, { useState } from 'react';
import './input.css';

const Inputmail = ({ placeholder, type = 'text', onChange }) => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    if (onChange) {
      onChange(`https://${inputValue}.com`);
    }
  };

  return (
    <div className='mail'>
      <div className='start'><p>https://</p></div>
      <div>
        <input
          type={type}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
        />
      </div>
      <div className='end'><p>.com</p></div>
    </div>
  );
};

export default Inputmail;
