import React from 'react';
import './buttons.css'; 

const IconButton = ({ children , onClick, icon }) => {
  return (
    <button className="btn icon-btn" onClick={onClick}>
      {icon}
      {children}
    </button>
  );
};

export default IconButton;
