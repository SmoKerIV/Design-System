import React from 'react';
import BaseAlert from './alert.jsx';
import { FaCheckCircle } from 'react-icons/fa';

const SuccessAlert = ({title , description}) => {
  return (
    <BaseAlert
      icon={<FaCheckCircle style={{ color: 'green' , fontSize:'30px' }} />}
      title={title}
      description={description}
      styleClass="SuccessAlert"
    />
  );
};

export default SuccessAlert;
