import React from "react";
//@ts-ignore
import styles from "./ScrollBar.module.scss";
import { NavLink } from "react-router-dom";

const ScrollBar = ({ activeLinkIndex }) => {
  const urlArray = ["", "trackrecord", "support"];
  return (
    <div className={styles.container}>
      {urlArray.map((url, i) => {
        return (
          <NavLink
            key={i}
            to={`/${url}`}
            className={`${styles.link} ${
              activeLinkIndex === i ? styles.activeLink : null
            }`}
          />
        );
      })}
    </div>
  );
};

export default ScrollBar;
