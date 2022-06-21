import React, { useEffect, useState } from "react";
//@ts-ignore
import styles from "./FirstPage.module.scss";
import Header from "../../components/Header/Header";
import Description from "../../components/Description /Description";
import BottomButtons from "../../components/BottomButtons/BottomButtons";
import Caption from "../../components/Caption/Caption";
import Ghost from "../../components/Ghost/Ghost";
import ScrollBar from "../../components/ScrollBar/ScrollBar";

const FirstPage = () => {
  return (
    <div className={`container ${styles.background}`} id="first">
      <div className={"mainContainer"}>
        <Header color={"#FF5B79"} />
        <Ghost>
          <div className={styles.imgContainer}>
            <Caption name={"Captain Sem"} about={"Veteran Spooky Ghost"} />
          </div>
          <Description
            heading={" #1 Top Scariest Ghost 2020"}
            title={"RESPAWN THE SPOOKY SKULL"}
            text={
              "In search for cute little puppy, Captain Sem has come back from his tragic death." +
              " With his hogwarts certified power he promise to be a hero for all of ghostkind."
            }
          />
          <ScrollBar activeLinkIndex={0} />
        </Ghost>
        <BottomButtons link={"/trackrecord"} />
      </div>
    </div>
  );
};

export default FirstPage;
