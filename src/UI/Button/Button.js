import React from 'react';
import styles from "./Button.module.scss";

const Button = ({ color="#FF5B79",textColor, children }) => (
  <button className={styles.container}>
      <span style={{color: textColor}} className={styles.text} >{children}</span>
  <svg width="161" height="81" viewBox="0 0 161 81" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.68786 20.1081C8.83563 13.3541 14.4748 8.27455 21.3116 7.83638L132.489 0.710935C139.059
    0.289884 145.115 4.2652 147.341 10.4603L159.738 44.9529C162.945 53.8779 157.035 63.4712 147.621
    64.62L16.6807 80.5984C6.86488 81.7962 -1.335 73.2024 0.321717 63.4536L7.68786 20.1081Z" fill={color}/>
  </svg>
</button>
);

export default Button;
