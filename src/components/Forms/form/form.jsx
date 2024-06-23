// Form.js
import React, { useState } from "react";
import "./form.css";

const FormComponent = ({ fields, handleSubmit }) => {
  const [formValues, setFormValues] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (e, id) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    fields.forEach((field) => {
      if (field.required && !formValues[field.name]) {
        newErrors[
          field.name
        ] = `Please input your ${field.label.toLowerCase()}!`;
      }
    });
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      handleSubmit(formValues);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={onSubmit} className="form">
        {fields.map((field) => (
          <div className="form-group" key={field.id}>
            <label htmlFor={field.name}>{field.label}:</label>
            <input
              type={field.type}
              id={field.name}
              name={field.name}
              value={formValues[field.name] || ""}
              onChange={(e) => handleChange(e, field.id)}
              required={field.required}
            />
            {errors[field.name] && (
              <span className="error">{errors[field.name]}</span>
            )}
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormComponent;
