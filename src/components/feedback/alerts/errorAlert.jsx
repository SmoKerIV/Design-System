import React from 'react';
import BaseAlert from './alert.jsx';
import Erroricon from '../../../icons/error.svg';

const ErrorAlert = ({title , description}) => {
  return (
    <BaseAlert
      icon={<img src={Erroricon} alt="Error icon" className="Error-icon" style={{ height:'30px',width:'30px'}}/>}
      title={title}
      description={description}
      styleClass="error"
    />
  );
};

export default ErrorAlert;
