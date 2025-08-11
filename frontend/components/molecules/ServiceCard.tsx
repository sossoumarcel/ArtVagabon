import React from 'react';
import  Heading  from '../atoms/Heading/Heading'; 
import  Icon  from '../atoms/Icon/Icon';
import  Paragraph  from '../atoms/Paragraph/Paragraph';
import  Button  from '../atoms/Button/Button';
import styles from './ServiceCard.module.css';

export interface ServiceCardProps {
  iconName: string;
  title: string;
  description: string;
  buttonLabel: string;
  buttonHref: string;
}


export const ServiceCard = ({ iconName, title, description, buttonLabel, buttonHref }: ServiceCardProps) => {
  const cardStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    padding: '2rem',
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    backgroundColor: '#ffffff',
    textAlign: 'center',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  };

  return (
    <div style={cardStyle}>
      <Icon name={iconName} />
      <Heading>{title}</Heading> 
      <Paragraph>{description}</Paragraph>
<Button variant="primary" href={buttonHref} label={buttonLabel} />
    </div>
  );
};
