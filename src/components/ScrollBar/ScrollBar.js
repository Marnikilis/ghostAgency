import React from 'react';
import styles from './ScrollBar.module.scss';

const ScrollBar = () => {
  return (
    <div className={styles.container}>
      <a className={styles.scrollBtn} href={'#first'}>
      </a>
      <a className={styles.scrollBtn} href={'#second'}>
      </a>
      <a className={styles.scrollBtn} href={'#third'}>
      </a>
      <a className={styles.scrollBtn} href={'#fourth'}>
      </a>
      <a className={styles.scrollBtn} href={'#fifth'}>
      </a>
    </div>
  );
};

export default ScrollBar;