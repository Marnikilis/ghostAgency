import React from "react";
//@ts-ignore
import styles from "./ScrollBar.module.scss";
import { NavLink } from "react-router-dom";

const ScrollBar = () => {
  return (
    <div className={styles.container}>
      <NavLink className={styles.link} to="/" />
      <NavLink className={styles.link} to="/trackrecord" />
      <NavLink className={styles.link} to="/support" />
    </div>
  );
};

export default ScrollBar;
