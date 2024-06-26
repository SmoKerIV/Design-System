import React from 'react';
import './buttons.css'; 

const Button = ({ type, children, onClick, disabled = false }) => { 
  return (
    <button className={`btn ${type}`} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
