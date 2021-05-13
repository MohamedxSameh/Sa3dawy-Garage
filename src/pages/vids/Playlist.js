import { useParams } from 'react-router';
import styles from './styles/playlist.module.css';

const videos = [
  {
    id: 'nnafiOlUfg0',
    title: 'vlog 1',
  },
  {
    id: 'R8vjK-tRwfI',
    title: 'vlog 3',
  },
  {
    id: '7U-YovIFC-s',
    title: 'vlog 4',
  },
  {
    id: 'Hu50lrajoPI',
    title: 'vlog 5',
  },
  {
    id: 'jl6D-_zV5n8',
    title: 'vlog 2',
  },
  {
    id: 'ysMlAIrt9Z4',
    title: 'vlog 6',
  },
];

function Playlist() {
  const { id } = useParams();
  return (
    <main className={`${styles['main']}`}>
      <h1 className={`${styles['title']}`}>{id} </h1>
      <ul className={`${styles['video-list']}`}>
        {videos.map(video => {
          return (
            <li className={`${styles['list-item']}`}>
              <div className={`${styles['video-container']}`}>
                <iframe
                  className={`${styles['video']}`}
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.id}
                  allowfullscreen
                />
              </div>
              <h2 className={`${styles['video-title']}`}>{video.title}</h2>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
export default Playlist;
