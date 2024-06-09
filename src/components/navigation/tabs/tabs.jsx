import React, { useState } from 'react';
import './tabs.css';
import icon from'./assets/tb.svg';
import aicon from'./assets/atb.svg';

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="tabs">
      <div className="tabs-header">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`tab ${index === activeTab ? 'active' : ''}`}
            onClick={() => handleClick(index)}
          >
            <img src={index === activeTab ? aicon : icon} alt="icon" className="icon" />
            {tab.title}
          </div>
        ))}
      </div>
      <div className="tabs-content">
        {tabs[activeTab].content}
      </div>
    </div>
  );
};

export default Tabs;
