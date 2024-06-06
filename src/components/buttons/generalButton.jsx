import React from 'react';
import './buttons.css'; 

const Button = ({ type, title , onClick }) => {
  return (
    <button className={`btn ${type}`} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
