import React from "react";
//@ts-ignore
import styles from "./ScrollBar.module.scss";
import { NavLink } from "react-router-dom";

const ScrollBar = () => {
  const onScrollHandler = (id) => {
    document.getElementById(`${id}`).scrollIntoView();
  };
  return (
    <div className={styles.container}>
      <NavLink
        className={styles.link}
        to="/"
        onClick={() => onScrollHandler("first")}
      />
      <NavLink
        className={styles.link}
        to="/trackrecord"
        onClick={() => onScrollHandler("second")}
      />
      <NavLink
        className={styles.link}
        to="/support"
        onClick={() => onScrollHandler("third")}
      />
    </div>
  );
};

export default ScrollBar;
