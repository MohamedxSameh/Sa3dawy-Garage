import styles from './styles/bikeGallery.module.css';

function BikeGallery({ gallery, image, setImage }) {
  return (
    <div className={`${styles['gallery']}`}>
      {gallery.map((img, index) => {
        return (
          <img
            src={`/photos/bikes/${img}`}
            alt="Motorcycles"
            className={`${index === image ? styles.active : styles.image}`}
            key={index}
            onClick={() => setImage(index)}
          />
        );
      })}
    </div>
  );
}
export default BikeGallery;
