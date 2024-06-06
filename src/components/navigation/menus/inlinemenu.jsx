import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './menu.css';

const Menu = ({ items, onItemClick }) => {
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

  const renderMenuItems = (menuItems) => {
    return menuItems.map((item, index) => (
      <div key={index}>
        <div
          className={`menu-item ${activeItem && activeItem.url === item.url ? 'active' : ''}`}
          onClick={() => handleItemClick(item)}
        >
          {item.submenu ? (
            <>
              {item.label} <span className="submenu-indicator">▼</span>
            </>
          ) : (
            <Link to={item.url}>{item.label}</Link>
          )}
        </div>
        {item.submenu && (
          <div className="submenu">
            {renderMenuItems(item.submenu)}
          </div>
        )}
      </div>
    ));
  };

  return (
    <div className="menu">
      {renderMenuItems(items)}
    </div>
  );
};

export default Menu;
