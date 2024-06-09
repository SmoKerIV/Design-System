import React, { useState } from 'react';
import './list.css'; 

const ListComponent = ({ initialItems = [] }) => {
    const [items] = useState(initialItems);
    const [visibleItems, setVisibleItems] = useState(5);
    
    const showMoreItems = () => {
      setVisibleItems(visibleItems + 5);
    };
  
    const showLessItems = () => {
      setVisibleItems(5);
    };
  
    return (
        <div className="list-container">
          <div className="header">Header</div>
          <ul className="list">
            {items.slice(0, visibleItems).map((item, index) => (
              <li key={index} className="list-item">{item}</li>
            ))}
          </ul>
          <div className="footer">Footer</div>
          <div className="button-container">
            {visibleItems < items.length && (
              <button className="load-more-button" onClick={showMoreItems}>Loading more</button>
            )}
            {visibleItems > 5 && (
              <button className="load-less-button" onClick={showLessItems}>Loading less</button>
            )}
          </div>
        </div>
      );
    };
  export default ListComponent;