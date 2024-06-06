import React from 'react';
import Button from './generalButton';

const TextButton = ({ title , onClick }) => {
  return <Button type="text" title={title} onClick={onClick} />;
};

export default TextButton;