import React from 'react';
import BaseAlert from './alert.jsx';
import Warningicon from '../../../icons/info-icon2.svg'
const WarningAlert = ({title,description}) => {
  return (
    <BaseAlert
      icon={ <img src={Warningicon} alt="Warrning icon" className="Warrning-icon" style={{ height:'30px',width:'30px'}}/>}
      title={title}
      description={description}
      styleClass="warning"
    />
  );
};

export default WarningAlert;
