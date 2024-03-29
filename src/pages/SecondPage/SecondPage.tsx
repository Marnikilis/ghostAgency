import React from "react";
import Header from "../../components/Header/Header";
//@ts-ignore
import styles from "./SecondPage.module.scss";
import Description from "../../components/Description /Description";
import BottomButtons from "../../components/BottomButtons/BottomButtons";
import Caption from "../../components/Caption/Caption";
import Ghost from "../../components/Ghost/Ghost";
import ScrollBar from "../../components/ScrollBar/ScrollBar";

const pageColor = "#303056";
const color = "#F8D3EB";

const SecondPage = () => {
  return (
    <div className={`container ${styles.background}`} id="trackrecord">
      <div className={"mainContainer"}>
        <Header
          color={pageColor}
          logoColor={pageColor}
          backgroundColor="#8A87C1"
        />
        <Ghost color={pageColor}>
          <div className={styles.reverse}>
            <Description
              color={pageColor}
              heading={"#2 top Best duo"}
              title={"BRING BACK MY COTTON CANDYL"}
              text={
                "Adino steals his brother cotton candy and eats them all" +
                " in one bite, such a hungry beast. Grahami can't hold any longer his anger to Adino."
              }
            />
            <div className={styles.imgContainer}>
              <Caption
                name={"Adino & Grahami"}
                about={"No words can describe them"}
                color={color}
              />
            </div>
          </div>
          <ScrollBar activeLinkIndex={1} />
        </Ghost>
        <BottomButtons link={"/support"} />
      </div>
    </div>
  );
};

export default SecondPage;
