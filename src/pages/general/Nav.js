import { Link } from 'react-router-dom';
import styles from './styles/nav.module.css';

function Nav({ setOpen, hamb }) {
  const close = () => {
    if (hamb) {
      setOpen(false);
    }
  };
  return (
    <nav className={`${styles['navbar']}`}>
      <ul className={`${styles['nav-list']}`}>
        <li className={`${styles['list-item']}`}>
          <Link to="/" className={`${styles['nav-link']}`} onClick={close}>
            home
          </Link>
        </li>
        <li className={`${styles['list-item']}`}>
          <Link to="shop" className={`${styles['nav-link']}`} onClick={close}>
            motorcycles
          </Link>
        </li>
        <li className={`${styles['list-item']}`}>
          <Link
            to="/videos"
            className={`${styles['nav-link']}`}
            onClick={close}
          >
            videos
          </Link>
        </li>
        <li className={`${styles['list-item']}`}>
          <Link
            to="/shooting"
            className={`${styles['nav-link']}`}
            onClick={close}
          >
            shooting
          </Link>
        </li>
        <li className={`${styles['list-item']}`}>
          <Link
            to="/contact"
            className={`${styles['nav-link']}`}
            onClick={close}
          >
            contact us
          </Link>
        </li>
      </ul>
    </nav>
  );
}
export default Nav;
