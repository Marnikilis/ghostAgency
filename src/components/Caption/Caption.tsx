import React from "react";
//@ts-ignore
import styles from "./Caption.module.scss";
import Pointer from "../../UI/Pointer/Pointer";

const Caption = (props) => {
  return (
    <div className={styles.caption}>
      <div className={styles.captionContent}>
        <div className={styles.captionText}>
          <p className={styles.ghostName}>{props.name}</p>
          {props.about}
        </div>
        <Pointer color={props.color} />
      </div>
    </div>
  );
};

export default Caption;
