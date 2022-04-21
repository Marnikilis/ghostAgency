import React from 'react';
import styles from './Header.module.scss';
import {ReactComponent as Logo} from '../../images/logo.svg';
import {NavLink} from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className={`mainContainer ${styles.container}`}>
        <Logo/>
        <div className={styles.nav}>
          <NavLink to='/graveyard'>Graveyard</NavLink>
          <NavLink to='/trackrecord'>Track Record</NavLink>
          <NavLink to='/services'>Services</NavLink>
          <NavLink to='/more'>Know More</NavLink>
          <NavLink to='/support'>Support</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;