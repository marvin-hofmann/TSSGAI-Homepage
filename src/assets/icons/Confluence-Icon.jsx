import React from 'react';
import PropTypes from 'prop-types';

const ConfluenceIcon = ({
    fillColor = 'white',
    size = 24,
}) => (
    <svg width={size} height={size} viewBox="0 0 48 48" fill={fillColor} style={{transform: "translateX(2px)"}} xmlns="http://www.w3.org/2000/svg">
        <path d="M1.16806 31.3314C0.829057 31.8834 0.444057 32.5304 0.145057 33.0394C-0.142943 33.5304 0.0120573 34.1614 0.497057 34.4604L7.29106 38.6534C7.78906 38.9604 8.44106 38.8024 8.73806 38.2984C9.00806 37.8414 9.35806 37.2534 9.74006 36.6214C12.4331 32.1774 15.1411 32.7194 20.0201 35.0384L26.7581 38.2414C27.2891 38.4944 27.9241 38.2584 28.1631 37.7204L31.3991 30.4144C31.6291 29.8944 31.4031 29.2874 30.8891 29.0454C29.4661 28.3764 26.6381 27.0414 24.1061 25.8154C14.9051 21.3604 7.12006 21.6554 1.16806 31.3314Z" fill={fillColor}></path>
        <path d="M31.6351 14.7276C31.9741 14.1756 32.3591 13.5286 32.6581 13.0196C32.9461 12.5286 32.7911 11.8976 32.3061 11.5986L25.5121 7.40562C25.0141 7.09862 24.3621 7.25662 24.0651 7.76062C23.7951 8.21762 23.4451 8.80561 23.0631 9.43761C20.3701 13.8816 17.6621 13.3396 12.7831 11.0206L6.04512 7.81762C5.51412 7.56462 4.87912 7.80061 4.64012 8.33861L1.40412 15.6446C1.17412 16.1646 1.40012 16.7716 1.91412 17.0136C3.33712 17.6826 6.16512 19.0176 8.69712 20.2436C17.8971 24.6986 25.6821 24.4046 31.6341 14.7276H31.6351Z" fill={fillColor}></path>
        <defs>
        <linearGradient id="paint0_linear_818_483" x1="31.1981" y1="40.8054" x2="10.6381" y2="28.9914" gradientUnits="userSpaceOnUse">
            <stop stopColor="var(--dark-950)"></stop>
            <stop offset="1" stopColor="var(--dark-950)"></stop>
        </linearGradient>
        <linearGradient id="paint1_linear_818_483" x1="1.60412" y1="5.25362" x2="22.1641" y2="17.0676" gradientUnits="userSpaceOnUse">
            <stop stopColor="var(--dark-950)"></stop>
            <stop offset="1" stopColor="var(--dark-950)"></stop>
        </linearGradient>
        </defs>
    </svg>
);

ConfluenceIcon.propTypes = {
  fillColor: PropTypes.string,
  size: PropTypes.number,
};

export default ConfluenceIcon;
