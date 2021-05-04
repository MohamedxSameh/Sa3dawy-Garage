import styles from './styles/hamb.module.css';
function Hamb({ open, setOpen }) {
  const close = open ? styles.animation : '';
  return (
    <div className={`${styles.icon}`} onClick={() => setOpen(!open)}>
      <span className={`${styles['top-bar']} ${styles.bar} ${close}`}></span>
      <span className={`${styles['bottom-bar']} ${styles.bar} ${close}`}></span>
    </div>
  );
}
export default Hamb;
