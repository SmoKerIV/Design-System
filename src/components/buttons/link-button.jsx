import React from 'react';
import Button from './generalButton';

const LinkButton = ({ children , onClick }) => {
  return <Button type="link" onClick={onClick}>{children}</Button>
};

export default LinkButton;