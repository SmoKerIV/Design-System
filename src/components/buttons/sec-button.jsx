import React from 'react';
import Button from './generalButton';

const SecondaryButton = ({ children, onClick }) => {
  return <Button type="secondary" onClick={onClick}>{children}</Button>;
};

export default SecondaryButton;

