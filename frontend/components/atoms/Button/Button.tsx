import React from 'react';
import { ButtonProps } from './types';
import './Button.css';

const Button: React.FC<ButtonProps> = ({ variant, label, onClick, isDisabled }) => {
  return (
    <button
      className={`button button--${variant}`}
      onClick={onClick}
      disabled={isDisabled}
      
    >
      {label}
    </button>
  );
};

export default Button;
