import React from 'react';
import Button from './generalButton';

const PrimaryButton = ({ children, onClick }) => {
  return <Button type="primary" onClick={onClick}>{children}</Button>;
};

export default PrimaryButton;
