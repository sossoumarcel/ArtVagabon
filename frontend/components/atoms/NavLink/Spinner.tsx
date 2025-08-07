// frontend/stories/atoms/Spinner.tsx
import React from 'react';

const Spinner = () => {
  return (
    <div style={{ textAlign: 'center', padding: '1rem' }}>
      <div style={{
        width: '40px',
        height: '40px',
        border: '4px solid #ccc',
        borderTop: '4px solid #333',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite'
      }} />
    </div>
  );
};

export default Spinner;
