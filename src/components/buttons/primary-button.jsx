import React from 'react';
import Button from './generalButton';

const PrimaryButton = ({ title , onClick }) => {
  return <Button type="primary" title={title} onClick={onClick} />;
};

export default PrimaryButton;