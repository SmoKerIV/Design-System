import React from 'react';
import Button from './generalButton';

const LinkButton = ({ title , onClick }) => {
  return <Button type="link" title={title} onClick={onClick} />;
};

export default LinkButton;