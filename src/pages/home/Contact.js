import styles from './styles/contact.module.css';

function Contact() {
  return (
    <section className={`${styles['contact']}`}>
      <h1 className={`${styles['title']}`}>contact us</h1>
      <div className={`${styles['info']}`}>
        <div className={`${styles['outer-container']}`}>
          <h2 className={`${styles['phone']}`}>phone</h2>
          <div className={`${styles['inner-container']}`}>
            <i className={`fas fa-phone-alt ${styles.icon}`} />
            <a className={`${styles['number']}`} href="tel:+201099464500">
              +201099464500
            </a>
          </div>
        </div>
        <div className={`${styles['outer-container']}`}>
          <h2 className={`${styles['location']}`}>location</h2>
          <div className={`${styles['inner-container']}`}>
            <i className={`fas fa-map-marker-alt ${styles.icon}`} />
            <p className={`${styles['directions']}`}>
              <a
                className={`${styles['directions']}`}
                target="_blank"
                rel="noreferrer"
                href="https://www.google.com/maps/place/Saadawy+Motorcycles/@30.0077112,31.4269887,15z/data=!4m5!3m4!1s0x0:0x9a3a4a40eaa90fae!8m2!3d30.0077112!4d31.4269887"
              >
                fifth statement - sa3dawy garage
              </a>
            </p>
          </div>
        </div>
      </div>
      <ul className={`${styles['social-list']}`}>
        <li className={`${styles['list-item']}`}>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/ahmed.saadawy.397"
          >
            <img
              src="./photos/social/fb.svg"
              alt="sa3dawy facebook"
              className={`${styles['social-icon']}`}
            />
          </a>
        </li>
        <li className={`${styles['list-item']}`}>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/sa3dawy_garage/"
          >
            <img
              src="./photos/social/ig.png"
              alt="sa3dawy instagram"
              className={`${styles['social-icon']}`}
            />
          </a>
        </li>
        <li className={`${styles['list-item']}`}>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.youtube.com/channel/UCKBwFqw-en3vBVLpiHPSz8w"
          >
            <img
              src="./photos/social/yt.svg"
              alt="sa3dawy youtube"
              className={`${styles['social-icon']}`}
            />
          </a>
        </li>
      </ul>
      <h2 className={`${styles['quote']}`}>
        we are always <br /> available for help
      </h2>
    </section>
  );
}
export default Contact;
