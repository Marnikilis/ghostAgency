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
    <div>
      <div className={styles.container}>
        <NavLink to='/'>
          <Logo color={color}/>
        </NavLink>
        <div>
          <NavLink style={{color}} to='/graveyard'>Graveyard</NavLink>
          <NavLink style={{color}} to='/trackrecord'>Track Record</NavLink>
          <NavLink style={{color}} to='/services'>Services</NavLink>
          <NavLink style={{color}} to='/more'>Know More</NavLink>
          <button style={btnStyles} className={styles.btn} >Support</button>
        </div>
      </div>
    </div>
  );
};

export default Header;