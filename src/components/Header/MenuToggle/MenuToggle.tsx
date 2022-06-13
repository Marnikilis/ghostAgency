import React from 'react';
//@ts-ignore
import styles from './MenuToggle.module.scss';

const MenuToggle = (props) => {
  const cls = [styles.menuToggle];

  if (props.isOpen) {
    cls.push(styles.open)
    cls.push(styles.menuClose)
  } else {
    cls.push(styles.menuOpen)
  }
  console.log(props.color)
  return (
    <div
      className={cls.join(' ')}
      onClick={props.onToggle}
      style={{color: props.color}}
    />
  );
};

export default MenuToggle;