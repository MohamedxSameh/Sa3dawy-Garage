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
            <i class={`fas fa-map-marker-alt ${styles.icon}`} />
            <p className={`${styles['directions']}`}>
              fifth statement - sa3dawy garage
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Contact;
