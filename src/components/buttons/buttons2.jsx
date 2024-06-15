import React from 'react';
import './buttons.css'; 

const Buttons = ({ type, children, onClick, disabled = false, icon }) => { 
  return (
    <button className={`btn ${type}`} onClick={onClick} disabled={disabled}>
      {icon && <span className="icon">{icon}</span>}
      {children}
    </button>
  );
};

export default Buttons;
