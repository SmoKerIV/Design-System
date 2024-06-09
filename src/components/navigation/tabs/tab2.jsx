import React, { useState, useRef, useEffect } from 'react';
import './tabs.css';
import icon from './assets/tb.svg';
import aicon from './assets/atb.svg';

const VerticalTabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [tabPosition, setTabPosition] = useState({ top: 0, height: 0 });
  const tabsRef = useRef(null);

  useEffect(() => {
    const activeTabElement = tabsRef.current.children[activeTab];
    const { offsetTop: top, offsetHeight: height } = activeTabElement;
    setTabPosition({ top, height });
  }, [activeTab]);

  const handleClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="vertical-tabs">
      <div className="vertical-tabs-header" ref={tabsRef}>
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`vertical-tab ${index === activeTab ? 'active' : ''}`}
            onClick={() => handleClick(index)}
          >
            <img src={index === activeTab ? aicon : icon} alt="icon" className="icon" />
            {tab.title}
          </div>
        ))}
        <div
          className="active-tab-indicator"
          style={{ top: tabPosition.top, height: tabPosition.height }}
        />
      </div>
      <div className="vertical-tabs-content">
        {tabs[activeTab].content}
      </div>
    </div>
  );
};

export default VerticalTabs;
