import Quote from '../general/Quote';
import Contact from './Contact';
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
        <div className={`${styles['hero-content']}`}>
          <div className={`${styles['quote']}`}>
            <Quote />
          </div>
          <button className={`${styles['shop-btn']}`}>shop</button>
        </div>
        <Contact />
      </main>
    </>
  );
}
export default Home;
