import React from 'react';
import BaseAlert from './alert.jsx';
import InfoIcon from '/Users/fatimamuhammed/Desktop/puretik tasks/Design-System/src/icons/info-icon.svg';

const InfoAlert = ({title ,description}) => {
  return (
    <BaseAlert
      icon={<img src={InfoIcon} alt="Info icon" className="Info-icon" style={{ height:'30px',width:'30px'}}/>}
      title={title}
      description={description}
      styleClass="informational-note"
    />
  );
};

export default InfoAlert;
