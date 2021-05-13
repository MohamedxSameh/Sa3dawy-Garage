import { useEffect, useState } from 'react';
import styles from './styles/slider.module.css';
function Slider() {
  const [slide, setSlide] = useState(1);
  useEffect(() => {
    const change = () => {
      if (slide < 7) {
        setSlide(slide + 1);
      } else {
        setSlide(1);
      }
    };
    setTimeout(change, 3000);
    return () => {
      clearTimeout(change);
    };
  });
  return (
    <div className={`${styles['slider']}`}>
      <img
        className={`${styles['image']}`}
        src={`/photos/slider/img${slide}.png`}
        alt="Motorcycles"
      />
    </div>
  );
}
export default Slider;
