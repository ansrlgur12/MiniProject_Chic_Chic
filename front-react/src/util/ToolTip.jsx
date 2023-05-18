import React, { useState } from 'react';

const Tooltip = ({ content, children }) => {
  const [isTooltipVisible, setTooltipVisible] = useState(false);

  const handleMouseEnter = () => {
    setTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    setTooltipVisible(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ position: 'relative', display: 'inline-block' }}
    >
      {children}
      {isTooltipVisible && (
        <div
          style={{
            width : '120px',
            height : '150px',
            position: 'absolute',
            top: '100%',
            left: '250%',
            transform: 'translateX(-50%)',
            backgroundColor: '#ccc',
            color: 'white',
            padding: '10px',
            borderRadius: '4px',
          }}
        >
          <span style={{ color: 'black' }}>{content}</span>
        </div>
      )}
    </div>
  );
};

export default Tooltip;
