import React from 'react';
import './alert.css';
import InfoIcon2 from './assets/info-icon2.svg';
import InfoIcon from './assets/info-icon.svg';
import Successicon from './assets/success-icon.svg';
import Erroricon from './assets/error.svg';

const colorMap = {
  Success: { backgroundColor: '#f6ffed', borderColor: '#b7eb8f' },
  Info: { backgroundColor: '#e8f4fa', borderColor: '#bee5eb' },
  Warning: { backgroundColor: '#fff8e5', borderColor: '#ffeeba' },
  Error: { backgroundColor: '#fdecea', borderColor: '#f5c6cb' },
};

const Alert = ({ type, description }) => {
  const iconMap = {
    Success: <img src={Successicon} alt="Success icon" className="Success-icon" style={{ height: '30px', width: '30px', color: '#4ab417' }} />,
    Info: <img src={InfoIcon} alt="Info icon" className="Info-icon" style={{ height: '30px', width: '30px' }} />,
    Error: <img src={Erroricon} alt="Error icon" className="Error-icon" style={{ height: '30px', width: '30px' }} />,
    Warning: <img src={InfoIcon2} alt="Info icon" className="Info-icon" style={{ height: '30px', width: '30px' }} />,
  };

  const styleClassMap = {
    Success: 'Success',
    Info: 'Informational note',
    Error: 'Error',
    Warning: 'Warning',
  };

  const icon = iconMap[type];
  const styleClass = styleClassMap[type];
  const { backgroundColor, borderColor } = colorMap[type];
  const title = styleClassMap[type];

  return (
    <div className={`alert ${styleClass}`} style={{ backgroundColor, borderColor }}>
      <div className="alert-icon">{icon}</div>
      <div className="alert-content">
        <h3 className="alert-title">{title}</h3>
        <p className="alert-description">{description}</p>
      </div>
    </div>
  );
};

export default Alert;
