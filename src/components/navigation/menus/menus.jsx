import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'; 
import './menu.css';

const Menus = ({ items, onItemClick }) => {
  const [activeItem, setActiveItem] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname;
    const matchedItem = items.find(item => item.url === pathname);
    setActiveItem(matchedItem ? matchedItem : null);
  }, [location, items]);

  const handleItemClick = (item) => {
    setActiveItem(item);
    onItemClick(item);
  };

  return (
    <div className="menu">
      {items.map((item, index) => (
        <div
          key={index}
          className={`menu-item ${activeItem && activeItem.url === item.url ? 'active' : ''}`}
          onClick={() => handleItemClick(item)}
        >
          <Link to={item.url}>{item.label}</Link>
        </div>
      ))}
    </div>
  );
};

export default Menus;
