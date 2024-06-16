import React from 'react';
import Radio from './radio';
import './radio.css';

const RadioGroup = ({ value, onChange, children }) => {
  const handleChange = (newValue) => {
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <div className="radio-group">
      {React.Children.map(children, (child) => {
        if (child.type === Radio) {
          return React.cloneElement(child, {
            selectedValue: value,
            onChange: handleChange,
          });
        }
        return child;
      })}
    </div>
  );
};

export default RadioGroup;
