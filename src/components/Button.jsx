import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', href, onClick, className = '' }) => {
  const baseStyles = "px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-accent text-white hover:shadow-lg hover:shadow-accent-red/30",
    outline: "border border-accent-red text-accent-red hover:bg-accent-red/10",
    disabled: "bg-slate-800 text-slate-400 cursor-not-allowed"
  };

  const Element = href ? (variant === 'disabled' ? 'span' : 'a') : 'button';
  const props = href && variant !== 'disabled' ? { href, target: "_blank", rel: "noopener noreferrer" } : { onClick, disabled: variant === 'disabled' };

  return (
    <Element {...props} className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </Element>
  );
};

export default Button;
