import React from 'react';
import './linear.css';

const LinearProgressBar = ({ value, color }) => {
    return (
        <div className="linear-progress-bar">
            <div
                className="linear-progress-bar-fill"
                style={{ width: `${value}%`, backgroundColor: color }}>
                <span className="linear-progress-bar-text">{value}%</span>
            </div>
        </div>
    );
};

export default LinearProgressBar;
