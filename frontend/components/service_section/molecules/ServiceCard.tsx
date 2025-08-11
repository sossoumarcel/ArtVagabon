import React from 'react';
import styled from 'styled-components';

// Assuming these atoms exist. If not, they would need to be created.
// For example, a simple implementation is provided in comments.

// const Icon = ({ name, size }) => <i className={`icon-${name} icon-${size}`}></i>;
// const Heading = ({ level, children }) => React.createElement(`h${level}`, null, children);
// const Paragraph = ({ children }) => <p>{children}</p>;
// const Button = ({ href, children, primary }) => <a href={href} className={`button ${primary ? 'primary' : ''}`}>{children}</a>;


export interface ServiceCardProps {
  iconName: string;
  title: string;
  description: string;
  buttonLabel: string;
  buttonHref: string;
}

const CardWrapper = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  background-color: #dfd8d8ff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
  }
`;

const IconWrapper = styled.div`
  font-size: 3rem; /* Placeholder for icon */
  margin-bottom: 1rem;
`;

const Title = styled.h3`
    font-size: 1.5rem;
    font-weight: bold;
    margin: 0;
`;

const Description = styled.p`
    font-size: 1rem;
    color: #666;
    flex-grow: 1;
`;

const StyledButton = styled.a`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: #eabf00ff;
  color: white;
  border-radius: 4px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #9e7c02ff;
  }
`;


const ServiceCard: React.FC<ServiceCardProps> = ({
  iconName,
  title,
  description,
  buttonLabel,
  buttonHref,
}) => {
  return (
    <CardWrapper>
      <IconWrapper>
        {/* Placeholder for an actual Icon component */}
        <span>{iconName}</span>
      </IconWrapper>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <StyledButton href={buttonHref}>
        {buttonLabel}
      </StyledButton>
    </CardWrapper>
  );
};

export default ServiceCard;
