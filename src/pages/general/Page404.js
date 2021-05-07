import { Link } from 'react-router-dom';
import styles from './styles/page404.module.css';
function Page404() {
  return (
    <div className={`${styles['container']}`}>
      <h1 className={`${styles['title']} ${styles.red}`}>404</h1>
      <h1 className={`${styles['title']}`}>sorry!! this page is unavailable</h1>
      <button className={`${styles['btn']}`}>
        <Link className={`${styles['link']}`} to="/">
          home page
        </Link>
      </button>
    </div>
  );
}
export default Page404;
