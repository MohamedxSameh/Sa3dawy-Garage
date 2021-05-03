import { useState } from 'react';
import styles from './styles/hamb.module.css';
function Hamb({ open, setOpen }) {
  const close = open ? styles.animation : '';
  return (
    <div className={`${styles.menu}`} onClick={() => setOpen(!open)}>
      <span className={`${styles['top-bar']} ${styles.icon} ${close}`}></span>
      <span
        className={`${styles['bottom-bar']} ${styles.icon} ${close}`}
      ></span>
    </div>
  );
}
export default Hamb;
