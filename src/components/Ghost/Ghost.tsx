import React from "react";
//@ts-ignore
import styles from "./Ghost.module.scss";

const cls = [styles.flexContainer];

const Ghost = (props) => {
  if (props.reverse) {
    cls.push(styles.reverse);
  }

  return (
    <div
      style={{
        color: props.color,
      }}
      className={cls.join(" ")}
    >
      {props.children}
    </div>
  );
};

export default Ghost;
