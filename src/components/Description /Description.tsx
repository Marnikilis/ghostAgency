import React from "react";
//@ts-ignore
import styles from "./Description.module.scss";
import Button from "../../UI/Button/Button";
import Arrow from "../../UI/Arrow";

const Description = (props) => {
  return (
    <div className={styles.description}>
      <div
        style={{ color: props.color ? props.color : "#FF5B79" }}
        className={styles.heading}
      >
        {props.heading}
      </div>
      <div className={styles.title}>{props.title}</div>
      <div> {props.text}</div>
      <div className={styles.buttons}>
        <Button textColor={props.textColor} color={props.btnColor}>
          Book Now
        </Button>
        <button className={styles.link} style={{ color: props.color }}>
          His Track Record
          <Arrow color={props.color} />
        </button>
      </div>
    </div>
  );
};

export default Description;
