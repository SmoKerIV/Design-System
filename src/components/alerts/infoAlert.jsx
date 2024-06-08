import React from 'react';
import BaseAlert from './alert.jsx';
import { FaInfoCircle } from 'react-icons/fa';

const InfoAlert = ({title ,description}) => {
  return (
    <BaseAlert
      icon={<FaInfoCircle style={{ color: '#1990ff' , fontSize:'30px'  }} />}
      title={title}
      description={description}
      styleClass="informational-note"
    />
  );
};

export default InfoAlert;
