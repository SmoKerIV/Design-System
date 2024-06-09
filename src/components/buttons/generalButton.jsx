import React from 'react';
import './buttons.css'; 

const Button = ({ type, title, onClick, disabled = false }) => { 
  return (
    <button className={`btn ${type}`} onClick={onClick} disabled={disabled}>
      {title}
    </button>
  );
};

export default Button;
