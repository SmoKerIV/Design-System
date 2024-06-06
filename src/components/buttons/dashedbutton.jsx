import React from 'react';
import Button from './generalButton';

const DashedButton = ({ title , onClick }) => {
  return <Button type="dashed" title={title} onClick={onClick} />;
};

export default DashedButton;
