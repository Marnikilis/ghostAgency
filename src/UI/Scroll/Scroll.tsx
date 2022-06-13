import React from "react";

const Scroll = ({ color = "#FF5B79", strokeColor = "#F8D3EB" }) => (
  <svg
    width="32"
    height="56"
    viewBox="0 0 36 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="1"
      y="1"
      width="34"
      height="54"
      rx="17"
      stroke={strokeColor}
      strokeWidth="2"
    />
    <path
      d="M18 12L18 20"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export default Scroll;
