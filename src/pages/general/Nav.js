import styles from './styles/nav.module.css';

function Nav() {
  return (
    <nav className={`${styles['navbar']}`}>
      <ul className={`${styles['nav-list']}`}>
        <li className={`${styles['list-item']}`}>home</li>
        <li className={`${styles['list-item']}`}>motorcycles</li>
        <li className={`${styles['list-item']}`}>videos</li>
        <li className={`${styles['list-item']}`}>shooting</li>
        <li className={`${styles['list-item']}`}>contact us</li>
      </ul>
    </nav>
  );
}
export default Nav;
