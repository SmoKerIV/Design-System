import React from 'react';
import Checkbox from './checkbox';

const CheckboxGroup = ({ options, value, onChange, disabled }) => {
  const handleChange = (optionValue) => {
    const newValue = [...value];
    if (newValue.includes(optionValue)) {
      newValue.splice(newValue.indexOf(optionValue), 1);
    } else {
      newValue.push(optionValue);
    }
    onChange(newValue);
  };

  return (
    <div>
      {options.map((option) => (
        <Checkbox
          key={option.value}
          value={option.value}
          checked={value.includes(option.value)}
          disabled={option.disabled || disabled}
          onChange={() => handleChange(option.value)}
        >
          {option.label}
        </Checkbox>
      ))}
    </div>
  );
};

export default CheckboxGroup;
