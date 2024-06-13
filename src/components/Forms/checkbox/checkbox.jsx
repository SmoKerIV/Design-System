import React from "react";
import "./checkbox.css";

const Checkbox = ({ children, checked, onChange, disabled }) => {
  return (
    <div
      className={`checkbox-wrapper ${checked ? "checked" : ""} ${
        disabled ? "disabled" : ""
      }`}
      onClick={onChange}
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
