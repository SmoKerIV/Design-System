import React from 'react';
import './circular.css';

const CircularProgressBar = ({ value, color, size }) => {
    const radius = size / 2 - 10; 
    const circleCircumference = 2 * Math.PI * radius;
    const strokeDashoffset = circleCircumference - (value / 100) * circleCircumference;

    return (
        <div className="circular-progress-bar">
            <svg width={size} height={size}>
                <circle
                    className="circular-progress-bar-bg"
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    strokeWidth="10"
                />
                <circle
                    className="circular-progress-bar-fill"
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
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

