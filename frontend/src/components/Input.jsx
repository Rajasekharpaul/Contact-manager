import React from 'react';

const Input = ({ label, type, name, value, onChange, placeholder, required = false }) => {
    return (
        <div className="input-group" style={{ marginBottom: '1.5rem' }}>
            {label && <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{label}</label>}
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                className="input-field"
            />
        </div>
    );
};

export default Input;
