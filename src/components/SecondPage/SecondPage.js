import React from 'react';
import Header from "../Header/Header";
import {ReactComponent as Pointer} from "../../images/pointer.svg";
import {ReactComponent as Scroll} from "../../images/scroll.svg";
import {ReactComponent as Adino} from "../../images/adino.svg";
import styles from './SecondPage.module.scss';
import Button from "../../UI/Button/Button";
import {ReactComponent as Arrow} from "../../images/arrow.svg";
import ScrollBar from "../ScrollBar/ScrollBar";



const color= "#303056";

const SecondPage = () => {

  return (
    <div className={styles.container} id='second'>
      <div className={'mainContainer'}>
        <Header color={color}/>
        <div className={styles.caption}>
          <div className={styles.captionText}>
            <p className={'heading'}>Adino & Grahami</p>
            No words can describe them
          </div>
          <Pointer className={styles.pointer}/>
        </div>
        <div className={styles.scroll}>
          <a href={"#third"} style={{marginRight:"0"}}>
            <Scroll/>
          </a>
          <div>Scroll for<br/> next ghost</div>
        </div>
          <div className={styles.mainPart}>
            <div className={styles.description}>
              <div className={'heading'}>#2 top Best duo </div>
              <div className={'title'}>BRING BACK MY COTTON CANDYL</div>
              <div>Adino steals his brother cotton candy and eats them all in one bite,
                such a hungry beast. Grahami can't hold any longer his anger to Adino.
              </div>
              <div className={styles.buttons}>
                <Button>Book Now</Button>
                <button>His Track Record
                  <Arrow className={styles.arrow}/>
                </button>
              </div>
            </div>
          <Adino className={styles.adino}/>
            <Button>See All Ghost</Button>
        </div>
      </div>
      <ScrollBar/>
    </div>
  );
};

export default SecondPage;