import React from "react";
import StrokeButton from "../../UI/Button/StrokeButton";
//@ts-ignore
import styles from "./BottomButtons.module.scss";
import Scroll from "../../UI/Scroll/Scroll";

const BottomButtons = (props) => {
  return (
    <div className={styles.bottomContainer}>
      <StrokeButton color={props.btnColor}>See All Ghost</StrokeButton>
      <div className={styles.scroll}>
        <a href={props.ghost} style={{ marginRight: "0" }}>
          <Scroll color={props.scrollColor} strokeColor={props.strokeColor} />
        </a>
        <span style={{ color: props.textColor }}>
          Scroll for
          <br /> next ghost
        </span>
      </div>
    </div>
  );
};

export default BottomButtons;
