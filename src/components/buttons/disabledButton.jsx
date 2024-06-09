import React from 'react';
import Button from './generalButton';

const DisabledButton = ({ title , onClick }) => {
  return <Button type="disabled" title={title} onClick={onClick} disabled={true} />;
};

export default DisabledButton;

