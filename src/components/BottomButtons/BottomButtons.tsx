import React from "react";
import StrokeButton from "../../UI/Button/StrokeButton";
//@ts-ignore
import styles from "./BottomButtons.module.scss";
import Scroll from "../../UI/Scroll/Scroll";
import { NavLink } from "react-router-dom";

const BottomButtons = (props) => {
  return (
    <div className={styles.bottomContainer}>
      <StrokeButton color={props.btnColor}>See All Ghost</StrokeButton>
      <div className={styles.scroll}>
        <NavLink to={props.link} style={{ marginRight: "0" }}>
          <Scroll color={props.scrollColor} strokeColor={props.strokeColor} />
        </NavLink>
        <span style={{ color: props.textColor }}>
          Scroll for
          <br /> next ghost
        </span>
      </div>
    </div>
  );
};

export default BottomButtons;
