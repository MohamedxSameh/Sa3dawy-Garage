import { useState } from 'react';
import Hamb from './Hamb';
import styles from './styles/header.module.css';

function Header() {
  const [open, setOpen] = useState(false);
  return (
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
  );
}
export default Header;
