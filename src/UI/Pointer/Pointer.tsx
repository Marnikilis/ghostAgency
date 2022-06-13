import React from "react";
//@ts-ignore
import styles from "./Pointer.module.scss";

const Pointer = ({ color = "#FF5B79" }) => (
  <svg
    className={styles.pointer}
    width="8"
    height="100"
    viewBox="0 0 8 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M4 4L4 100" stroke={color} />
    <circle cx="4" cy="4" r="4" fill={color} />
  </svg>
);

export default Pointer;
