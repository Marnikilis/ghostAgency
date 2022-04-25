import React from 'react';
import Header from "../Header/Header";
import Pointer from '../../UI/Pointer/Pointer';
import Scroll from "../../UI/Scroll/Scroll";
import {ReactComponent as Adino} from "../../images/adino.svg";
import styles from './SecondPage.module.scss';
import Button from "../../UI/Button/Button";
import Arrow from "../../UI/Arrow";
import ScrollBar from "../ScrollBar/ScrollBar";
import StrokeButton from "../../UI/Button/StrokeButton";


const pageColor = "#303056";
const color = "#F8D3EB";

const SecondPage = () => {

  return (
    <div className={styles.container} id='second'>
      <div className={'mainContainer'}>
        <Header color={pageColor}/>
        <Adino className={styles.adino}/>
        <div className={styles.caption}>
          <div className={'captionText'}>
            <p className={'caption'}>Adino & Grahami</p>
            No words can describe them
          </div>
          <Pointer color={color}/>
        </div>
        <div className={'scroll'}>
          <a href={'#second'} style={{marginRight: "0"}}>
            <Scroll/>
          </a>
          <div>Scroll for<br/> next ghost</div>
        </div>
        <div style={{color: pageColor}} className={'mainPart'}>
          <div className={`description ${styles.description}`}>
            <div className={'heading'}>#2 top Best duo</div>
            <div className={'title'}>BRING BACK MY COTTON CANDYL</div>
            <div>Adino steals his brother cotton candy and eats them all in one bite,
              such a hungry beast. Grahami can't hold any longer his anger to Adino.
            </div>
            <div className={'buttons'}>
              <Button>Book Now</Button>
              <a className={'link'} style={{color: pageColor}}>His Track Record
                <Arrow color={pageColor}/>
              </a>
            </div>
          </div>
          <StrokeButton color={color}>See All Ghost</StrokeButton>
        </div>
      </div>
      <ScrollBar/>
    </div>
  );
};

export default SecondPage;