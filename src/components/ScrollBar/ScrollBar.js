import React from 'react';
import styles from './ScrollBar.module.scss';

const ScrollBar = () => {
  return (
    <div className={styles.container}>
      <a className={styles.scrollBtn} href={'#first'}/>
      <a className={styles.scrollBtn} href={'#second'}/>
      <a className={styles.scrollBtn} href={'#third'}/>
      <a className={styles.scrollBtn} href={'#fourth'}/>
      <a className={styles.scrollBtn} href={'#fifth'}/>
    </div>
  );
};

export default ScrollBar;