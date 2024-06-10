import React, { useState } from 'react';
import './radio.css';

const Radio = ({ label, name, value, disabled }) => {
    const [selectedValue, setSelectedValue] = useState(null);

    const handleChange = (e) => {
        setSelectedValue(e.target.value);
    };

    return (
        <div className={`radio-wrapper ${disabled ? 'disabled' : ''}`}>
            <input
                type="radio"
                name={name}
                value={value}
                checked={selectedValue === value}
                disabled={disabled}
                onChange={handleChange}
            />
            {label}
        </div>
    );
};

export default Radio;
