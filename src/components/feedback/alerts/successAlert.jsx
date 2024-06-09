import React from 'react';
import BaseAlert from './alert.jsx';
import Successicon from './assets/success-icon.svg';

const SuccessAlert = ({title , description}) => {
  return (
    <BaseAlert
      icon={<img src={Successicon} alt="Success icon" className="Success-icon" style={{ height:'30px',width:'30px',color:'#4ab417'}}/>}
      title={title}
      description={description}
      styleClass="SuccessAlert"
    />
  );
};

export default SuccessAlert;
