import { useState } from 'react';
import styles from './styles/slider.module.css';
const slides = [
  {
    id: 0,
    src: '/photos/slider/img1',
  },
];
function Slider() {
  const [slide, setSlide] = useState(1);
  const change = () => {
    if (slide < 7) {
      setSlide(slide + 1);
    } else {
      setSlide(1);
    }
  };
  setTimeout(change, 3000);
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
