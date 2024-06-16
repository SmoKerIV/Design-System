import React, { useState, useRef, useEffect } from 'react';
import './menu.css';
import arrow from './assets/arrow.svg';
import arrowd from './assets/arrowd.svg';
import message from './assets/message.svg'; 

const InlineMenu = ({ items, onSelect }) => {  const [isOpen, setIsOpen] = useState(false);
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
    <div className="selector-menu" ref={menuRef}>
      <div className="selector-menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        <div className='selector-title'>
          <img src={message} alt="message" className="menu-icon" />
          {selectedItem ? selectedItem.label : 'Navigation One'}
        </div>
        <img
          src={isOpen ? arrow : arrowd}
          alt="Arrow"
          className={'arrow'}
        />
      </div>
      <div className={`selector-menu-list ${isOpen ? 'open' : 'close'}`}>
        {items.map((item, index) => (
          <div
            key={index}
            className={`selector-menu-item ${selectedItem && selectedItem.label === item.label ? 'selected' : ''}`}
            onClick={() => handleItemClick(item)}
          >
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InlineMenu;
