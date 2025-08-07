import React from 'react';
import { ParagraphProps } from './types';
import './Paragraph.css';

const Paragraph: React.FC<ParagraphProps> = ({ size = 'medium', children }) => {
  return <p className={`paragraph paragraph--${size}`}>{children}</p>;
};

export default Paragraph;
