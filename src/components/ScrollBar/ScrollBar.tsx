import React from "react";
//@ts-ignore
import styles from "./ScrollBar.module.scss";

const ScrollBar = () => {
  const onScrollHandler = (id) => {
    document.getElementById(`${id}`).scrollIntoView();
  };
  return (
    <div className={styles.container}>
      <button
        className={"firstLink"}
        onClick={() => onScrollHandler("first")}
      />
      <button
        className={"secondLink"}
        onClick={() => onScrollHandler("second")}
      />
      <button
        className={"thirdLink"}
        onClick={() => onScrollHandler("third")}
      />
    </div>
  );
};

export default ScrollBar;
