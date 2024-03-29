import React from "react";
import Header from "../../components/Header/Header";
//@ts-ignore
import styles from "./ThirdPage.module.scss";
import Description from "../../components/Description /Description";
import BottomButtons from "../../components/BottomButtons/BottomButtons";
import Caption from "../../components/Caption/Caption";
import Ghost from "../../components/Ghost/Ghost";
import ScrollBar from "../../components/ScrollBar/ScrollBar";

const pageColor = "#F8F8FD";
const color = "#A7DE93";

const ThirdPage = () => {
  return (
    <div className={`container ${styles.background}`} id="support">
      <div className={"mainContainer"}>
        <Header
          color={pageColor}
          logoColor={pageColor}
          backgroundColor="#0C343D"
        />
        <Ghost color={pageColor}>
          <div className={styles.imgContainer}>
            <Caption
              name={"The Labu “Reiza”"}
              about={"The Living Pumpkin"}
              color={color}
            />
          </div>
          <Description
            color={pageColor}
            btnColor={color}
            textColor={"#303056"}
            heading={"#3 Top Scariest Ghost 2020"}
            title={"UOOOO TRICK OR TREAT!!"}
            text={
              "Hi I’m Reiza, people call me “The Labu” " +
              "currently I’m trying to learn something new, building my own " +
              "bike with parts only madefrom Malaysia."
            }
          />
          <ScrollBar activeLinkIndex={2} />
        </Ghost>
        <BottomButtons
          btnColor={color}
          scrollColor={color}
          textColor={pageColor}
          strokeColor={pageColor}
          link={"/"}
        />
      </div>
    </div>
  );
};

export default ThirdPage;
