import React from 'react';
import Heading from '../atoms/Heading/Heading'; 
import Icon from '../atoms/Icon/Icon';
import Paragraph from '../atoms/Paragraph/Paragraph';
import Button from '../atoms/Button/Button';
import styles from './ServiceCard.module.css';

export interface ServiceCardProps {
  iconName: string;
  title: string;
  description: string;
  buttonLabel: string;
  buttonHref: string;
}

export const ServiceCard = ({ iconName, title, description, buttonLabel, buttonHref }: ServiceCardProps) => {
  return (
    <div className={styles.card}>
      <Icon name={iconName} className={styles.icon} />
            <Heading>{title}</Heading> 
      
      <Paragraph className={styles.description}>{description}</Paragraph>

      <div className={styles.buttonWrapper}>
        <Button variant="primary" href={buttonHref} label={buttonLabel} />
      </div>
    </div>
  );
};