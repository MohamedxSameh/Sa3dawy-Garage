import styles from './styles/slider.module.css';

function BikeSlider({ gallery, image, setImage }) {
  let size = gallery.length;
  const changeImage = type => {
    switch (type) {
      case 'next':
        if (image === size - 1) {
          setImage(0);
        } else {
          setImage(image + 1);
        }
        break;
      case 'prev':
        if (image === 0) {
          setImage(size - 1);
        } else {
          setImage(image - 1);
        }
        break;
      default:
    }
  };
  return (
    <div className={`${styles['slider']}`}>
      <button
        className={`${styles.btn} ${styles['left-btn']}`}
        onClick={() => changeImage('prev')}
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
      <img
        src={`/photos/bikes/${gallery[image]}`}
        alt="Motorcycle"
        className={`${styles['image']}`}
      />
      <button
        className={`${styles.btn} ${styles['right-btn']}`}
        onClick={() => changeImage('next')}
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
  );
}
export default BikeSlider;
