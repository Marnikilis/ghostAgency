import React from 'react';
import Header from "../Header/Header";
import {ReactComponent as Pointer} from "../../images/pointer.svg";
import {ReactComponent as Scroll} from "../../images/scroll.svg";
import {ReactComponent as Pumpkin} from "../../images/pumpkin.svg";
import Button from "../../UI/Button/Button";
import {ReactComponent as Arrow} from "../../images/arrow.svg";
import ScrollBar from "../ScrollBar/ScrollBar";
import styles from './ThirdPage.module.scss';



const color= "#F8F8FD";

const ThirdPage = () => {

  return (
    <div className={styles.container} id='third'>
      <div className={'mainContainer'}>
        <Header color={color}/>
        <Pumpkin className={styles.pumpkin}/>
        <div className={styles.caption}>
          <div className={styles.captionText}>
            <p className={'heading'}>The Labu “Reiza”</p>
            The Living Pumpkin
          </div>
          <Pointer className={styles.pointer}/>
        </div>
        {/*<div className={styles.scroll}>*/}
        {/*  <Scroll/>*/}
        {/*  <div>Scroll for<br/> next ghost</div>*/}
        {/*</div>*/}
        <div className={styles.mainPart}>
          <div className={styles.description}>
            <div className={'heading'}>#3 Top Scariest Ghost 2020</div>
            <div className={'title'}>UOOOO TRICK OR TREAT!!</div>
            <div>Hi I’m Reiza, people call me “The Labu” currently I’m trying to learn something new,
              building my own bike with parts only made from Malaysia.
            </div>
            <div className={styles.buttons}>
              <Button>Book Now</Button>
              <button>His Track Record
                <Arrow className={styles.arrow}/>
              </button>
            </div>
          </div>
          <Button>See All Ghost</Button>
        </div>
      </div>
      <ScrollBar/>
    </div>
  );
};

export default ThirdPage;