import styles from './styles/playlist.module.css';

function Playlist({ playlists }) {
  return (
    <div>
      <ul className={`${styles['list']}`}>
        {playlists.map(playlist => {
          return (
            <li className={`${styles['playlist']}`}>
              <img
                src={playlist.image}
                alt={playlist.title}
                className={`${styles['playlist-image']}`}
              />
              <h2 className={`${styles['playlist-title']}`}>
                {playlist.title}
              </h2>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default Playlist;
