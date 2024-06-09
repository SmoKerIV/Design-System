// src/InputField.js

import React, { useState } from 'react';
import './input.css';

const InputField = ({ placeholder, type = 'text', onChange }) => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <div>
      <input
        type={type}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;
