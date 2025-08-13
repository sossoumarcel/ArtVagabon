import React from 'react';
import { ParagraphProps } from './types';
import './Paragraph.css';

const Paragraph: React.FC<ParagraphProps> = ({ size = 'medium', children, className }) => {
  const classes = `paragraph paragraph--${size}` + (className ? ` ${className}` : '');

  return <p className={classes}>{children}</p>;
};

export default Paragraph;
