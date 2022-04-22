import React from 'react';
import styles from './FirstPage.module.scss';
import Header from "../Header/Header";
import {ReactComponent as Spooky} from '../../images/spooky.svg';
import {ReactComponent as Pointer} from '../../images/pointer.svg';
import {ReactComponent as Scroll} from '../../images/scroll.svg';
import {ReactComponent as Arrow} from '../../images/arrow.svg';
import Button from "../../UI/Button/Button";
import ScrollBar from "../ScrollBar/ScrollBar";

const FirstPage = () => {

  return (
    <div className={styles.container} id='first'>
      <div className={'mainContainer'}>
        <Spooky className={styles.spooky}/>
        <Header />
        <div className={styles.caption}>
          <div className={styles.captionText}>
            <p className={'heading'}>Captain Sem</p>
            Veteran Spooky Ghost
          </div>
          <Pointer className={styles.pointer}/>
        </div>
        <div className={styles.scroll}>
          <a href={'#second'} style={{marginRight:"0"}}>
            <Scroll/>
          </a>
          <div>Scroll for<br/> next ghost</div>
        </div>
        <div className={styles.mainPart}>
          <div className={styles.description}>
            <div className={'heading'}>#1 Top Scariest Ghost 2020</div>
            <div className={'title'}>RESPAWN <br/>THE SPOOKY SKULL</div>
            <div>In search for cute little puppy, Captain Sem has come back from his tragic death.
              With his hogwarts certified power he promise to be a hero for all of ghostkind.
            </div>
            <div className={styles.buttons}>
              <Button>Book Now</Button>
              <button>His Track Record
                <Arrow className={styles.arrow}/>
              </button>
            </div>
          </div>
          <Button className={'generalBtn'}>See All Ghost</Button>
        </div>
      </div>
      <ScrollBar/>
    </div>
  );
};

export default FirstPage;