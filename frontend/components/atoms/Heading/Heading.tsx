import React from 'react';
import { HeadingProps } from './types';
import './Heading.css';

const Heading = ({ 
  as: Component = 'h1', 
  variant = 'primary', 
  children, 
  className = '' 
}: HeadingProps) => {
  const headingClasses = `heading heading--${variant} ${className}`.trim();

  return (
    <Component className={headingClasses}>
      {children}
    </Component>
  );
};

export default Heading;