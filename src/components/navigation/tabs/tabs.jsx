import React, { useState, useRef, useEffect } from 'react';
import './tabs.css';

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [tabPosition, setTabPosition] = useState({ left: 0, width: 0 });
  const tabsRef = useRef(null);

  useEffect(() => {
    const activeTabElement = tabsRef.current.children[activeTab];
    const { offsetLeft: left, offsetWidth: width } = activeTabElement;
    setTabPosition({ left, width });
  }, [activeTab]);

  const handleClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="tabs">
      <div className="tabs-header" ref={tabsRef}>
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`tab ${index === activeTab ? 'active' : ''}`}
            onClick={() => handleClick(index)}
          >
            <img src={index === activeTab ? tab.aicon : tab.icon} alt="icon" className="icon" />
            {tab.title}
          </div>
        ))}
        <div
          className="active-tabs-indicator"
          style={{ left: tabPosition.left, width: tabPosition.width }}
        />
      </div>
      <div className="tabs-content">
        {tabs[activeTab].content}
      </div>
    </div>
  );
};

export default Tabs;
