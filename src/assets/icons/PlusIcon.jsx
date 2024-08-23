import React from 'react';

const PlusIcon = ({ strokeWidth = 1.5, fill = 'transparent', strokeColor = 'currentColor', width = 24, height = 24 }) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill={fill}
  >
    <path
      d="M19,11H13V5a1,1,0,0,0-2,0v6H5a1,1,0,0,0,0,2h6v6a1,1,0,0,0,2,0V13h6a1,1,0,0,0,0-2Z"
      style={{ strokeWidth, stroke: strokeColor }}
    />
  </svg>
);

export default PlusIcon;
