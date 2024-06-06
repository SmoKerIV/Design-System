import React, { useState } from 'react';
import './card.css';

const Card = ({ imageSrc, title, description }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  }

  return (
    <div className="card">
       <div className="card-header">
        <p className="card-title">{title}</p>
        <button onClick={toggleDescription} className="card-toggle">
          {isExpanded ? 'Less' : 'More'}
        </button>
      </div>
      <img 
        src={imageSrc} 
        alt={title} 
        className="card-image" 
      />
     
      <p className={`card-description ${isExpanded ? 'expanded' : ''}`}>{description}</p>
     
    </div>
  );
}

export default Card;
