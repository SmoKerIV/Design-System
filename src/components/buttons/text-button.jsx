import React from 'react';
import Button from './generalButton';

const TextButton = ({ children , onClick }) => {
  return <Button type="text" onClick={onClick}>{children}</Button>;
};

export default TextButton;