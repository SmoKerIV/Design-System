import React, { useState } from 'react';
import Button from './generalButton'; 
import '@fortawesome/fontawesome-free/css/all.min.css';

const LoadingButton = ({ title, onClick }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    try {
      await (onClick ? onClick() : new Promise(resolve => setTimeout(resolve, 2000)));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button 
      type="primary" 
      title={
        isLoading ? (
          <>
            <i className="fas fa-spinner fa-spin"></i> Loading...
          </>
        ) : (
          title
        )
      } 
      onClick={handleClick} 
    />
  );
};

export default LoadingButton;
