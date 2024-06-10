// Form.js
import React from 'react';
import './form.css';

const Form = ({ fields, formValues, errors, handleChange, handleSubmit }) => {
    return (
        <div className="form-container">
            <form onSubmit={handleSubmit} className="form">
                {fields.map((field) => (
                    <div className="form-group" key={field.id}>
                        <label htmlFor={field.name}>{field.label}:</label>
                        <input
                            type={field.type}
                            id={field.name}
                            name={field.name}
                            value={formValues[field.name] || ''}
                            onChange={(e) => handleChange(e, field.id)}
                            required={field.required}
                        />
                        {errors[field.name] && <span className="error">{errors[field.name]}</span>}
                    </div>
                ))}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Form;
