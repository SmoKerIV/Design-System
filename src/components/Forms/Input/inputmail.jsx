// src/InputField.js

import React, { useState } from 'react';
import './input.css';

const Inputmail = ({ placeholder, type = 'text', onChange, addonBefore = 'http://', addonAfter = '.com', defaultValue = '' }) => {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    if (onChange) {
      onChange(`${addonBefore}${inputValue}${addonAfter}`);
    }
  };

  return (
    <div className="input-field">
      <div className="addon addon-before">{addonBefore}</div>
      <input
        type={type}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className="input"
      />
      <div className="addon addon-after">{addonAfter}</div>
    </div>
  );
};

export default Inputmail;
