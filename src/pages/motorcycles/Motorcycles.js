import { useState } from 'react';
import styles from './styles/motorcycles.module.css';
const bikes = [
  {
    src: '/photos/Rides/naked.png',
    title: 'naked & street bikes',
  },
  {
    src: './photos/Rides/sport.png',
    title: 'sports bikes',
  },
  {
    src: './photos/Rides/adventure.png',
    title: 'touring & adventure bikes',
  },
  {
    src: './photos/Rides/cruiser.png',
    title: 'cruising bikes',
  },
  {
    src: './photos/Rides/scooter.png',
    title: 'scooter',
  },
];

function Motorcycles() {
  const [bike, setBike] = useState(0);
  const changeBike = type => {
    switch (type) {
      case 'next':
        if (bike === 4) {
          setBike(0);
        } else {
          setBike(bike + 1);
        }
        break;
      case 'prev':
        if (bike === 0) {
          setBike(4);
        } else {
          setBike(bike - 1);
        }
        break;
    }
  };
  return (
    <main className={`${styles['container']}`}>
      <h1 className={styles['title']}>choose your ride</h1>
      <div className={styles['motorcycles']}>
        <button
          className={`${styles.btn} ${styles['left-btn']}`}
          onClick={() => changeBike('prev')}
        >
          <svg
            width="50"
            height="81"
            viewBox="0 0 50 81"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles['icon']}
          >
            <path
              d="M48.3319 71.2173C50.556 73.3564 50.556 76.8188 48.3319 78.9542C46.1077 81.0905 42.5013 81.0905 40.2768 78.9542L0 40.2782L40.2768 1.60219C42.5009 -0.534064 46.1073 -0.534064 48.3319 1.60219C50.556 3.73845 50.556 7.2 48.3319 9.33626L16.1106 40.2782L48.3319 71.2173Z"
              fill="#FF1F1F"
            />
          </svg>
        </button>
        <div className={styles['bike']}>
          <img
            className={styles['bike-image']}
            src={bikes[bike].src}
            alt="Motorcycle"
          />
        </div>
        <button
          className={`${styles.btn} ${styles['right-btn']}`}
          onClick={() => changeBike('next')}
        >
          <svg
            width="50"
            height="81"
            viewBox="0 0 50 81"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles['icon']}
          >
            <path
              d="M1.66811 71.2173C-0.556037 73.3564 -0.556037 76.8188 1.66811 78.9542C3.89226 81.0905 7.49867 81.0905 9.72322 78.9542L50 40.2782L9.72322 1.60219C7.49908 -0.534064 3.89267 -0.534064 1.66811 1.60219C-0.556037 3.73845 -0.556037 7.2 1.66811 9.33626L33.8894 40.2782L1.66811 71.2173Z"
              fill="#FF1F1F"
            />
          </svg>
        </button>
      </div>
      <h2 className={styles['bike-title']}>{bikes[bike].title}</h2>
    </main>
  );
}
export default Motorcycles;
