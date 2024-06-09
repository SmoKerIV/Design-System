import React from 'react';
import BaseAlert from './alert.jsx';
import { FaTimesCircle } from 'react-icons/fa';

const ErrorAlert = ({title , description}) => {
  return (
    <BaseAlert
      icon={<FaTimesCircle style={{ color: 'red' , fontSize:'30px'  }} />}
      title={title}
      description={description}
      styleClass="error"
    />
  );
};

export default ErrorAlert;
