import styles from './styles/footer.module.css';

function Footer() {
  return (
    <footer className={styles['footer']}>
      <div className={styles['logo']}>
        <img src={process.env.PUBLIC_URL + '/photos/logo.png'} alt="" />
      </div>
      <h3 className={styles['quote']}>
        The undertaking of a new action brings new strength
      </h3>
      <ul className={styles['social']}>
        <li className={[styles['list-item'], styles.ig].join(' ')}>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/sa3dawy_garage/"
          >
            <i className="fab fa-instagram" />
          </a>
        </li>
        <li className={[styles['list-item'], styles.fb].join(' ')}>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/sa3dawygrage"
          >
            <i className="fab fa-facebook-f" />
          </a>
        </li>
        <li className={[styles['list-item'], styles.yt].join(' ')}>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.youtube.com/channel/UCKBwFqw-en3vBVLpiHPSz8w"
          >
            <i className="fab fa-youtube" />
          </a>
        </li>
      </ul>
    </footer>
  );
}
export default Footer;
