import React from 'react';
import styles from './Header.module.scss';
// import {ReactComponent as Logo} from '../../images/logo.svg';
import {NavLink} from "react-router-dom";
import Logo from "../../UI/Logo";

const Header = ({color= "white"}) => {

  const btnStyles = {
    color,
    border: `2px solid ${color}`
  }

  return (
    <header>
      <div className={styles.container}>
        <NavLink to='/'>
          <Logo color={color}/>
        </NavLink>
        <div className={styles.nav}>
          <NavLink style={{color}} to='/graveyard'>Graveyard</NavLink>
          <NavLink style={{color}} to='/trackrecord'>Track Record</NavLink>
          <NavLink style={{color}} to='/services'>Services</NavLink>
          <NavLink style={{color}} to='/more'>Know More</NavLink>
          <button style={btnStyles} className={styles.btn} >Support</button>
        </div>
        <div style={{color}} className={styles.menu}>
        <div className={styles.menuBtn}/>
        </div>
      </div>
    </header>
  );
};

export default Header;