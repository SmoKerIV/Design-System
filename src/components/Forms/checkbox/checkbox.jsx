import React from "react";
import "./checkbox.css";

const Checkbox = ({ children, checked, onChange, disabled }) => {
    const handleClick = () => {
        if (!disabled && onChange) {
          onChange();
        }
      };
  return (
    <div
      className={`checkbox-wrapper ${checked ? "checked" : ""} ${
        disabled ? "disabled" : ""
      }`}
      onClick={handleClick}
    >
      <div
        className={`checkbox ${checked ? "checked" : ""} ${
          disabled ? "disabled" : ""
        }`}
      >
        {checked && <span className="checkmark">&#x2713;</span>}
      </div>
      {children}
    </div>
  );
};

export default Checkbox;
