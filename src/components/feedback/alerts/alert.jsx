import React from 'react';
import './alert.css'; 

const BaseAlert = ({ icon, title, description, styleClass }) => {
  return (
    <div className={`alert ${styleClass}`}>
      <div className="alert-icon">{icon}</div>
      <div className="alert-content">
        <h3 className="alert-title">{title}</h3>
        <p className="alert-description">{description}</p>
      </div>
    </div>
  );
};

export default BaseAlert;
