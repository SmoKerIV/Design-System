import React, { useState } from "react";
import "./radio.css";

const Radio = ({ children, value, selectedValue, onChange, disabled }) => {
  const handleChange = () => {
    if (!disabled && onChange) {
      onChange(value);
    }
  };
  return (
    <div
      className={`radio-wrapper ${disabled ? "disabled" : ""}`}
      onClick={handleChange}
    >
      <button
        type="button"
        className={`radio-button ${selectedValue === value ? "selected" : ""}`}
        disabled={disabled}
      >
      </button>
      {children}
    </div>
  );
};

export default Radio;
