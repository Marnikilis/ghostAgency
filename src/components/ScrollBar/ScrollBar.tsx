import React from "react";
//@ts-ignore
import styles from "./ScrollBar.module.scss";

const ScrollBar = () => {
  return (
    <div className={styles.container}>
      <a className={"firstLink"} href={"#first"} />
      <a className={"secondLink"} href={"#second"} />
      <a className={"thirdLink"} href={"#third"} />
    </div>
  );
};

export default ScrollBar;
