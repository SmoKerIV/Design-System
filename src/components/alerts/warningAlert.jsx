import React from 'react';
import BaseAlert from './alert.jsx';
import { FaExclamationCircle } from 'react-icons/fa';

const WarningAlert = ({title,description}) => {
  return (
    <BaseAlert
      icon={<FaExclamationCircle style={{ color: 'orange' , fontSize:'30px'  }} />}
      title={title}
      description={description}
      styleClass="warning"
    />
  );
};

export default WarningAlert;
