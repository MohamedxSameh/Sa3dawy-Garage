import { useState } from 'react';
import styles from './styles/bikeInfo.module.css';

function BikeInfo({ info, name }) {
  const [mod, setMod] = useState(false);
  return (
    <div className={`${styles['bike-info']}`}>
      <h2 className={`${styles['name']}`}>{name}</h2>
      <p className={`${styles['model']}`}>model: {info.model}</p>
      <p className={`${styles['color']}`}>color: {info.color}</p>
      <p className={`${styles['kilometers']}`}>kilometers: {info.km}</p>
      <p className={`${styles['price']}`}>
        <span className={styles.red}>price:</span> {info.price} l.e
      </p>
      {info.mod.length > 0 ? (
        <>
          <div className={`${styles['mod']}`} onClick={() => setMod(!mod)}>
            <p className={`${styles['modifications']}`}>modifications</p>
            <svg
              width="10"
              height="6"
              viewBox="0 0 10 6"
              fill="black"
              xmlns="http://www.w3.org/2000/svg"
              className={`${styles.arrow} ${mod && styles.up}`}
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.99992 6.00008L-7.55191e-05 1.00008L0.707031 0.292969L5.70703 5.29297L4.99992 6.00008Z"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.00008 6.00008L10.0001 1.00008L9.29297 0.292969L4.29297 5.29297L5.00008 6.00008Z"
              />
            </svg>
          </div>
          {mod && (
            <ul className={`${styles['list']}`}>
              {info.mod.map(item => {
                return <li className={`${styles['item']}`}>{item}</li>;
              })}
            </ul>
          )}
        </>
      ) : (
        ''
      )}
    </div>
  );
}
export default BikeInfo;
