import React from 'react';
import Header from "../Header/Header";
import Pointer from '../../UI/Pointer/Pointer';
import {ReactComponent as Pumpkin} from "../../images/pumpkin.svg";
import Button from "../../UI/Button/Button";
import Arrow from "../../UI/Arrow";
import ScrollBar from "../ScrollBar/ScrollBar";
import styles from './ThirdPage.module.scss';
import Scroll from "../../UI/Scroll/Scroll";
import StrokeButton from "../../UI/Button/StrokeButton";


const pageColor = "#F8F8FD";
const color = "#A7DE93";

const ThirdPage = () => {

  return (
    <div className={styles.container} id='third'>
      <div className={'mainContainer'}>
        <Pumpkin className={styles.pumpkin}/>
        <Header color={pageColor} logoColor={pageColor}/>
        <div className={styles.caption}>
          <div className={'captionText'}>
            <p className={'caption'}>The Labu “Reiza”</p>
            The Living Pumpkin
          </div>
          <Pointer color={color}/>
        </div>
        <div style={{pageColor}} className={'mainPart'}>
          <div className={'description'}>
            <div className={'heading'}>#3 Top Scariest Ghost 2020</div>
            <div className={'title'}>UOOOO TRICK OR TREAT!!</div>
            <div>Hi I’m Reiza, people call me “The Labu” currently I’m trying to learn something new,
              building my own bike with parts only made from Malaysia.
            </div>
            <div className={'buttons'}>
              <Button color={color} textColor={"#303056"}>Book Now</Button>
              <a className={'link'}>
                His Track Record
                <Arrow color={pageColor}/>
              </a>
            </div>
          </div>
          <div className={'scroll'}>
            <a href={'#first'} style={{marginRight: "0"}}>
              <Scroll color={color}/>
            </a>
            <div>Scroll for<br/> next ghost</div>
          </div>
          <StrokeButton color={color}>See All Ghost</StrokeButton>
        </div>
      </div>
      <ScrollBar/>
    </div>
  );
};

export default ThirdPage;