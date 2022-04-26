import React from 'react';
import styles from './Header.module.scss';
// import {ReactComponent as Logo} from '../../images/logo.svg';
import {NavLink} from "react-router-dom";
import Logo from "../../UI/Logo";

const Header = ({color= "white", logoColor = "white"}) => {

  const btnStyles = {
    color,
    border: `2px solid ${color}`
  }

  return (
    <header>
      <div className={styles.container}>
        <NavLink to='/'>
          <Logo color={logoColor}/>
        </NavLink>
        <div style={{color}} className={styles.menu}>
          <input className={styles.checkbox} type='checkbox' id='check'/>
          <div className={styles.menuBtn}/>
          <div className={styles.nav} id='nav'>
            <NavLink style={{color}} to='/graveyard'>Graveyard</NavLink>
            <NavLink style={{color}} to='/trackrecord'>Track Record</NavLink>
            <NavLink style={{color}} to='/services'>Services</NavLink>
            <NavLink style={{color}} to='/more'>Know More</NavLink>
            <button style={btnStyles} className={styles.btn} >Support</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;