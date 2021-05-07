import { Link } from 'react-router-dom';
import styles from './styles/videos.module.css';

const playlists = [
  {
    image: '/photos/videos/vlogs.png',
    title: 'vlogs',
    id: 'vlogs',
  },
  {
    image: '/photos/videos/showroom.png',
    title: 'showroom',
    id: 'showroom',
  },
  {
    image: '/photos/videos/rides.png',
    title: 'rides',
    id: 'rides',
  },
  {
    image: '/photos/videos/reviews.png',
    title: 'bikes reviews',
    id: 'bikes-reviews',
  },
];
function Videos() {
  return (
    <main className={`${styles['main']}`}>
      <h1 className={`${styles['title']}`}>videos</h1>
      <div>
        <ul className={`${styles['list']}`}>
          {playlists.map(playlist => {
            return (
              <li className={`${styles['playlist']}`}>
                <Link
                  to={`/videos/${playlist.id}`}
                  className={`${styles['playlist-link']}`}
                >
                  <img
                    src={playlist.image}
                    alt={playlist.title}
                    className={`${styles['playlist-image']}`}
                  />
                  <h2 className={`${styles['playlist-title']}`}>
                    {playlist.title}
                  </h2>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
}
export default Videos;
