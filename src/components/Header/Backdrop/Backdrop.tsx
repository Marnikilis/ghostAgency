import React from 'react';
//@ts-ignore
import styles from './Backdrop.module.scss';

const Backdrop = props => <div className={styles.backdrop} onClick={props.onClick}/>

export default Backdrop;