import React from 'react';
import './buttons.css'; 

const IconButton = ({ title, onClick, icon }) => {
  return (
    <button className="btn icon-btn" onClick={onClick}>
      {icon}
      {title}
    </button>
  );
};

export default IconButton;
