import React from 'react';
import styles from './FirstPage.module.scss';
import Header from "../Header/Header";
import {ReactComponent as Spooky} from '../../images/spooky.svg';
import Pointer from '../../UI/Pointer/Pointer';
import Arrow from "../../UI/Arrow";
import Button from "../../UI/Button/Button";
import Scroll from "../../UI/Scroll/Scroll";
import ScrollBar from "../ScrollBar/ScrollBar";
import StrokeButton from "../../UI/Button/StrokeButton";


const FirstPage = () => {

  return (
    <div className={styles.container} id='first'>
      <div className={'mainContainer'}>
        <Spooky className={styles.spooky}/>
        <Header/>
        <div className={styles.caption}>
          <div className={'captionText'}>
            <p className={'caption'}>Captain Sem</p>
            Veteran Spooky Ghost
          </div>
          <Pointer/>
        </div>
        <div className={'mainPart'}>
          <div className={'description'}>
            <div className={'heading'}>#1 Top Scariest Ghost 2020</div>
            <div className={'title'}>RESPAWN <br/>THE SPOOKY SKULL</div>
            <div>In search for cute little puppy, Captain Sem has come back from his tragic death.
              With his hogwarts certified power he promise to be a hero for all of ghostkind.
            </div>
            <div className={'buttons'}>
              <Button>Book Now</Button>
              <a className={'link'}>His Track Record
                <Arrow/>
              </a>
            </div>
          </div>
          <div className={'scroll'}>
            <a href={'#second'} style={{marginRight: "0"}}>
              <Scroll/>
            </a>
            <div>Scroll for<br/> next ghost</div>
          </div>
          <StrokeButton>See All Ghost</StrokeButton>
        </div>
      </div>
      <ScrollBar/>
    </div>
  );
};

export default FirstPage;