import React from 'react';

const HeroBanner = ({ title, subtitle, backgroundImage, buttonText, buttonLink }) => {
  const hasImage = Boolean(backgroundImage);

  const containerStyle = {
    backgroundImage: hasImage ? `url(${backgroundImage})` : undefined,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: hasImage ? undefined : '#333',
    color: 'white',
    padding: '100px 40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    position: 'relative',
    minHeight: '400px',
  };

  const overlayStyle = hasImage
    ? {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 0,
      }
    : {};

  const contentStyle = {
    position: hasImage ? 'relative' : 'static',
    zIndex: 1,
    maxWidth: '600px',
    textAlign: 'left',
  };

  const buttonStyle = {
    marginTop: '20px',
    padding: '12px 24px',
    backgroundColor: '#ff6600',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'inline-block',
    transition: 'all 0.3s ease',
  };

  const buttonHoverStyle = {
    transform: 'translateY(-3px)',
    backgroundColor: '#68300cff',
  };

  const [isHovered, setHovered] = React.useState(false);

  return (
    <div style={containerStyle}>
      {hasImage && <div style={overlayStyle} />}
      <div style={contentStyle}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        {buttonText && buttonLink && (
          <a
            href={buttonLink}
            style={{
              ...buttonStyle,
              ...(isHovered ? buttonHoverStyle : {}),
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            {buttonText}
          </a>
        )}
      </div>
    </div>
  );
};

export default HeroBanner;
