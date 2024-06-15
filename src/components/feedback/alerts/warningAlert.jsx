import React from 'react';
import BaseAlert from './alert.jsx';
import InfoIcon2 from './assets/info-icon2.svg';

const WarningAlert = ({ title, description }) => {
  return (
    <BaseAlert
      icon={<img src={InfoIcon2} alt="Info icon" className="Info-icon" style={{ height:'30px',width:'30px'}}/>}
      title={title}
      description={description}
      styleClass="warning"
    />
  );
};

export default WarningAlert;
