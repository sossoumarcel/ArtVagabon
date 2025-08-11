import React from 'react';
import Heading from '../atoms/Heading/Heading';
import { ServiceCard, ServiceCardProps } from '../molecules/ServiceCard';
import styles from './ServicesSection.module.css';

interface ServicesSectionProps {
  title: string;
  services: ServiceCardProps[];
}

export const ServicesSection = ({ title, services }: ServicesSectionProps) => {
  return (
    <section className={styles.section}>
      <div className={styles.sectionTitle}>
        <Heading>{title}</Heading> 
      </div>
      <div className={styles.grid}>
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;