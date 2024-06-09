// src/InputField.js

import React, { useState } from 'react';
import './input.css';
import search from './assets/search.svg';

const SearchInput = ({ placeholder, type = 'text', onChange, onSearch }) => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    if (onChange) {
      onChange(inputValue);
    }
  };

  const handleSearch = () => {
    if (onSearch) {
      onSearch(value);
    }
  };

  return (
    <div className='search-input-container'>
      <input
        type={type}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className='search-input-field'
      />
      <button className='search-input-button' onClick={handleSearch}>
        <img src={search}/>
      </button>
    </div>
  );
};

export default SearchInput;
