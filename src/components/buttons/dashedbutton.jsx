import React from 'react';
import Button from './generalButton';


const DashedButton = ({ children , onClick }) => {
  return <Button type="dashed" onClick={onClick}>{children}</Button>;
};

export default DashedButton;
