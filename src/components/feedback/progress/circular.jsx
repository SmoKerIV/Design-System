import React from 'react';
import './circular.css';

const CircularProgressBar = ({ value, color }) => {
    const circleRadius = 50;
    const circleCircumference = 2 * Math.PI * circleRadius;
    const strokeDashoffset = circleCircumference - (value / 100) * circleCircumference;

    return (
        <div className="circular-progress-bar">
            <svg width="120" height="120">
                <circle
                    className="circular-progress-bar-bg"
                    cx="60"
                    cy="60"
                    r="50"
                    strokeWidth="10"
                />
                <circle
                    className="circular-progress-bar-fill"
                    cx="60"
                    cy="60"
                    r="50"
                    strokeWidth="10"
                    stroke={color}
                    strokeDasharray={circleCircumference}
                    strokeDashoffset={strokeDashoffset}
                />
                <text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="1.2em">
                    {value}%
                </text>
            </svg>
        </div>
    );
};

export default CircularProgressBar;
