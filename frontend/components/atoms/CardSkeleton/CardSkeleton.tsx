
import React from 'react';
import './CardSkeleton.css';
import { CardSkeletonProps } from './types';

const CardSkeleton: React.FC<CardSkeletonProps> = ({ width, height, imageHeight }) => {
  const style = {
    width: width,
    height: height,
  };

  const imageStyle = {
    height: imageHeight,
  };

  return (
    <div className="card-skeleton" style={style}>
      <div className="skeleton-image" style={imageStyle}></div>
      <div className="skeleton-content">
        <div className="skeleton-title"></div>
        <div className="skeleton-text"></div>
      </div>
    </div>
  );
};

export default CardSkeleton;
