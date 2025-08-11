import React from 'react';
import styled from 'styled-components';
import ServiceCard, { ServiceCardProps } from '../molecules/ServiceCard';

export interface ServicesSectionProps {
  title: string;
  services: ServiceCardProps[];
}

const SectionWrapper = styled.section`
  padding: 4rem 1rem;
  background-color: #e8e5e5ff;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 3rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ServicesSection: React.FC<ServicesSectionProps> = ({ title, services }) => {
  return (
    <SectionWrapper>
      <Title>{title}</Title>
      <Grid>
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </Grid>
    </SectionWrapper>
  );
};

export default ServicesSection;
