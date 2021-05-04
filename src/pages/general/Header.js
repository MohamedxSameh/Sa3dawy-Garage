import { useEffect, useState } from 'react';
import Hamb from './Hamb';
import Nav from './Nav';
import styles from './styles/header.module.css';

function Header() {
  const [open, setOpen] = useState(false);
  const resize = () => {
    if (window.innerWidth >= 1024) {
      setOpen(true);
    } else {
      setOpen(false);
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
          <img
            src="/photos/logo.png"
            alt="sa3dawy garage"
            className={`${styles['logo-image']}`}
          />
        </div>
        <Hamb open={open} setOpen={setOpen} />
      </header>
      {open && <Nav />}
    </div>
  );
}
export default Header;
