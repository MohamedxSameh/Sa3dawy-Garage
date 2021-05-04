import Quote from '../general/Quote';
import Contact from './Contact';
import Map from './Map';
import styles from './styles/home.module.css';
function Home() {
  return (
    <>
      <main className={`${styles['hero-section']}`}>
        <div className={`${styles['hero-image']}`}>
          <img
            src="/photos/main.jpg"
            alt="cool motorcycles"
            className={`${styles['image']}`}
          />
        </div>
        <div className={`${styles['shop']}`}>
          <div className={`${styles['quote']}`}>
            <Quote />
          </div>
          <button className={`${styles['shop-btn']}`}>shop</button>
        </div>
        <Contact />
        <div className={`${styles['visit']}`}>
          <h1 className={`${styles['visit-title']}`}>vist us</h1>
          <div className={`${styles['map']}`}>
            <Map />
          </div>
        </div>
      </main>
    </>
  );
}
export default Home;
