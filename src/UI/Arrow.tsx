import React from "react";

const Arrow = ({ color = "#FF5B79" }) => (
  <svg
    style={{ marginLeft: "10px" }}
    width="31"
    height="12"
    viewBox="0 0 31 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M25 1L30 6.00001M30 6.00001L25 11M30 6.00001H0" stroke={color} />
  </svg>
);

export default Arrow;
