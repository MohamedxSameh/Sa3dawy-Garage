import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Hamb from './Hamb';
import Nav from './Nav';
import styles from './styles/header.module.css';

function Header() {
  const [open, setOpen] = useState(false);
  const [hamb, setHamb] = useState(true);
  const resize = () => {
    if (window.innerWidth >= 1024) {
      setOpen(true);
      setHamb(false);
    } else {
      setOpen(false);
      setHamb(true);
    }
  };
  useEffect(() => {
    resize();
    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);
  return (
    <div className={`${styles['header-container']} ${open && styles.opened}`}>
      <header className={`${styles['header']}`}>
        <div className={`${styles['logo']}`}>
          <Link to="/">
            <img
              src="/photos/logo.png"
              alt="sa3dawy garage"
              className={`${styles['logo-image']}`}
            />
          </Link>
        </div>
        <Hamb open={open} setOpen={setOpen} />
      </header>
      {open && <Nav setOpen={setOpen} hamb={hamb} />}
    </div>
  );
}
export default Header;
