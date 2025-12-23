import React from 'react';

const Button = ({ children, onClick, type = "button", variant = "primary", className = "", disabled = false }) => {
    const baseStyle = "px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-1 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
        primary: "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50",
        secondary: "bg-slate-700 text-slate-200 hover:bg-slate-600",
        danger: "bg-red-500 text-white hover:bg-red-600 shadow-lg shadow-red-500/30",
        outline: "border-2 border-indigo-500 text-indigo-400 hover:bg-indigo-500/10"
    };

    // Using inline styles for some parts because we are using Vanilla CSS mainly, 
    // but I used Tailwind-like classnames in the plan description. 
    // Wait, the plan said "Vanilla CSS". 
    // So I should use the classes defined in index.css or inline styles.
    // My index.css defined `.btn-primary`.

    // Let's stick to the Vanilla CSS classes I defined in index.css and add more here locally or generic.
    // Actually, I should use the classes from index.css.

    let btnClass = "btn-primary";
    if (variant === 'danger') btnClass = "btn-danger"; // Need to define this if used

    // To keep it simple and consistent with "Vanilla CSS" instruction:
    // I will use `className` prop to allow overrides.

    return (
        <button
            type={type}
            onClick={onClick}
            className={`${btnClass} ${className}`}
            disabled={disabled}
            style={{
                opacity: disabled ? 0.7 : 1,
                cursor: disabled ? 'not-allowed' : 'pointer'
            }}
        >
            {children}
        </button>
    );
};

export default Button;
