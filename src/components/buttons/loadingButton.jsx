import React, { useState } from 'react';
import Button from './generalButton';
import spinningCircle from './assets/spinning-circle.gif'; 

const LoadingButton = ({ title, loadingDurationInSeconds, spinnerSize }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, loadingDurationInSeconds * 1000));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button 
      type="primary" 
      title={
        isLoading ? (
          <img src={spinningCircle} alt="Loading..." style={{ width:'20px', height: '20px' }} />
        ) : (
          title
        )
      } 
      onClick={handleClick} 
    />
  );
};

export default LoadingButton;
