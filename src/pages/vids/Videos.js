import Playlist from './Playlist';
import styles from './styles/videos.module.css';

const playlists = [
  {
    image: '/photos/videos/vlogs.png',
    title: 'vlogs',
  },
  {
    image: '/photos/videos/showroom.png',
    title: 'showroom',
  },
  {
    image: '/photos/videos/rides.png',
    title: 'rides',
  },
  {
    image: '/photos/videos/reviews.png',
    title: 'bikes reviews',
  },
];
function Videos() {
  return (
    <main className={`${styles['main']}`}>
      <h1 className={`${styles['title']}`}>videos</h1>
      <Playlist playlists={playlists} />
    </main>
  );
}
export default Videos;
