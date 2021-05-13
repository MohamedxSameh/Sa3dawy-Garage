import styles from './styles/shop.module.css';
import { sportbikes } from '../../data/bikes';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

function Shop() {
  const { id } = useParams();
  return (
    <div className={`${styles['container']}`}>
      <nav className={`${styles['shop-nav']}`}>
        <Link to="/shop" className={`${styles['back-btn']}`}>
          <svg
            width="20"
            height="30"
            viewBox="0 0 30 60"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
            className={`${styles['svg']}`}
          >
            <path d="M0 30L29.9991 0V14.9996L14.9995 30L30 44.9996L29.9991 60L0 30Z" />
          </svg>
        </Link>
        <h1 className={`${styles['title']}`}>{id.replace('-', ' ')}</h1>
      </nav>
      <div className={`${styles['shop']}`}>
        {sportbikes.map(bike => {
          return (
            <div className={`${styles['bike']}`} key={bike.id}>
              <Link
                className={`${styles['bike-link']}`}
                to={`/bike/${bike.name.replace(' ', '-')}-${bike.id}`}
              >
                <h2 className={`${styles['bike-title']}`}>{bike.name}</h2>
                <img
                  src={`/photos/bikes/${bike.image}`}
                  alt="bike"
                  className={`${styles['bike-image']}`}
                />
                <p className={`${styles['model']}`}>
                  model: {bike.info.model}{' '}
                </p>
                <p className={`${styles['price']}`}>
                  price: {bike.info.price} l.e
                </p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Shop;
