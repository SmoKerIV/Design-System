import React from 'react';
import Button from './generalButton';

const DisabledButton = ({ children, onClick }) => {
  return (
    <Button type="disabled" onClick={onClick} disabled={true}>
      {children}
    </Button>
  );
};

export default DisabledButton;


