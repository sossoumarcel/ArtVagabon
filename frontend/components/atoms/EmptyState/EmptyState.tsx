import React from 'react';
import { EmptyStateProps } from './types';
import './EmptyState.css';

const EmptyState: React.FC<EmptyStateProps> = ({ message }) => {
  return (
    <div className="empty-state-container">
      <p>{message}</p>
    </div>
  );
};

export default EmptyState;