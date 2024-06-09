import React from 'react';
import './badges.css';
const Badges = ({ title, notificationCount, onClick, icon }) => {
  return (
    <div className="box" onClick={onClick}>
      {icon && <span className="icon">{icon}</span>}
      {title}
      {notificationCount > 0 && (
        <span className="notification" role="status">{notificationCount}</span>
      )}
    </div>
  );
};

export default Badges;
