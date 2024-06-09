import React, { useState, useRef, useEffect } from 'react';
import './menu.css';
import arrowr from './assets/arrowr.svg';
import arrowd from './assets/arrowd.svg';
import message from './assets/message.svg'; // Import your message here

const SelectedMenu = ({ items, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
    onSelect(item);
  };

  return (
    <div className="selected-menu" ref={menuRef}>
      <div className="selected-menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        <div>
        <img src={message} alt="message" className="menu-icon" />
        {selectedItem ? selectedItem.label : 'Navigation One'}
        </div>
        <img
          src={arrowr}
          alt="Arrow"
          className={`arrow ${isOpen ? 'arrow-up' : 'arrow-down'}`}
        />
      </div>
      {isOpen && (
        <div className="selected-menu-list">
          {items.map((item, index) => (
            <div
              key={index}
              className={`selected-menu-item ${selectedItem && selectedItem.label === item.label ? 'selected' : ''}`}
              onClick={() => handleItemClick(item)}
            >
              {item.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectedMenu;
