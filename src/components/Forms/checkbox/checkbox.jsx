// Checkbox.js
import React, { useState, useEffect, useRef } from 'react';
import './checkbox.css';

const Checkbox = ({ label, indeterminate, disabled, checked, onChange }) => {
    const checkboxRef = useRef();

    useEffect(() => {
        checkboxRef.current.indeterminate = indeterminate;
    }, [indeterminate]);

    return (
        <div className={`checkbox-wrapper ${disabled ? 'disabled' : ''}`}>
            <input
                type="checkbox"
                ref={checkboxRef}
                checked={checked}
                disabled={disabled}
                onChange={onChange}
            />
            {label}
        </div>
    );
};

export default Checkbox;
