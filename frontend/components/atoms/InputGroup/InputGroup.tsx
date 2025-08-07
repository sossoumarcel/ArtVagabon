import React from 'react';
import './InputGroup.css';
import { InputGroupProps } from './types';

const InputGroup: React.FC<InputGroupProps> = ({
  placeholder = "Rechercher...",
  buttonText = "Go",
  onButtonClick,
}) => {
  return (
    <div className="input-group">
      <input type="text" className="input" placeholder={placeholder} />
      <button className="button" onClick={onButtonClick}>
        {buttonText}
      </button>
    </div>
  );
};

export default InputGroup;