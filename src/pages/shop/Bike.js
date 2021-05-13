import { useState } from 'react';
import { useParams } from 'react-router-dom';
import BikeGallery from './BikeGallery';
import BikeInfo from './BikeInfo';
import BikeSlider from './BikeSlider';
import styles from './styles/bike.module.css';
import { sportbikes as bikes } from '../../data/bikes';

function Bike() {
  const [image, setImage] = useState(0);
  let { id } = useParams();
  id = id.slice(id.lastIndexOf('-') + 1, id.length);
  let bike = bikes[id];
  return (
    <div className={`${styles['container']}`}>
      <div className={`${styles['bike']}`}>
        <BikeSlider gallery={bike.gallery} image={image} setImage={setImage} />
        <section>
          <BikeInfo info={bike.info} name={bike.name} />
          <BikeGallery
            gallery={bike.gallery}
            image={image}
            setImage={setImage}
          />
        </section>
      </div>
    </div>
  );
}
export default Bike;
