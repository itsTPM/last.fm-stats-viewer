import styles from './MediaPreview.module.css';

interface Props {
  image: string;
  title: string;
  artist?: string;
  playcount?: string | number;
}

export default function MediaPreview({ image, title, artist, playcount }: Props) {
  const showPlaycount = playcount !== undefined && playcount !== null;

  return (
    <article className={styles.media}>
      <img src={image} className={styles.image} alt="" />

      <h3 className={styles.title}>{title}</h3>

      {artist && (
        <p>
          By <b>{artist}</b>
        </p>
      )}

      {showPlaycount && (
        <p>
          <b>{playcount}</b> plays
        </p>
      )}
    </article>
  );
}
