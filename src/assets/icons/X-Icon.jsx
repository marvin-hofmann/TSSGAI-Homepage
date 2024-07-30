import React from 'react';
import PropTypes from 'prop-types';

const XIcon = ({
  fillColor = 'rgb(0, 0, 0)',
  strokeWidth = 1.5,
  strokeColor = "black",
  size = 24,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
  >
    <path
      d="M20.576,19.721l-6.707-9.287l4.354-5.399c0.433-0.538,0.349-1.325-0.188-1.758c-0.537-0.434-1.325-0.349-1.758,0.188	l-3.926,4.868L9.057,3.771C8.707,3.287,8.146,3,7.549,3H4.078C3.42,3,3.039,3.746,3.424,4.279l5.762,7.978l-5.409,6.707	c-0.433,0.538-0.349,1.325,0.188,1.758C4.196,20.909,4.474,21,4.749,21c0.365,0,0.727-0.159,0.974-0.465l4.981-6.176l4.24,5.87	c0.35,0.484,0.91,0.771,1.507,0.771h3.471C20.58,21,20.961,20.254,20.576,19.721z"
      style={{
        fill: fillColor,
        stroke: strokeColor,
        strokeWidth: strokeWidth,
      }}
    />
  </svg>
);

XIcon.propTypes = {
  strokeColor: PropTypes.string,
  fillColor: PropTypes.string,
  strokeWidth: PropTypes.number,
  size: PropTypes.number,
};

export default XIcon;
