import React, { useState } from 'react';
import './notification.css';

const Notification = ({ title, message }) => {
    const [showNotification, setShowNotification] = useState(true);

    const handleNotificationClose = () => {
        setShowNotification(false);
    };

    if (!showNotification) {
        return null;
    }

    return (
        <div className="notification-container">
            <div className="notification-header">
                <h3 className="notification-title">{title}</h3>
                <button className="notification-close" onClick={handleNotificationClose}>×</button>
            </div>
            <p className="notification-message">{message}</p>
            <div className="notification-actions">
                <button className="notification-confirm">Confirm</button>
            </div>
        </div>
    );
};

export default Notification;
