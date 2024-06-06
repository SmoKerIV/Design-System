import React from 'react';
import './buttons.css'; 

const Button = ({ type, title }) => {
  return (
    <button className={`btn ${type}`}>
      {title}
    </button>
  );
};

export default Button;
