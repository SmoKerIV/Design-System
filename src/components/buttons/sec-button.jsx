import React from 'react';
import Button from './generalButton';

const SecondaryButton = ({ title, onClick }) => {
  return <Button type="secondary" title={title} onClick={onClick} />;
};

export default SecondaryButton;
