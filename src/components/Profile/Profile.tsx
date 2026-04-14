import type { LastFMArtistGetInfoResponse, LastFMUserGetInfoResponse } from 'lastfm-ts-api';
import { getImageUrl, pickBestImage } from '@/utils';
import styles from './Profile.module.css';

type Props =
  | { kind: 'user'; profile: LastFMUserGetInfoResponse['user'] }
  | { kind: 'artist'; profile: LastFMArtistGetInfoResponse['artist'] };

export default function Profile({ kind, profile }: Props) {
  const image = getImageUrl(pickBestImage(profile.image));

  return (
    <article className={styles.profile}>
      <header className={styles.header}>
        <h1 className={styles.name}>{profile.name}</h1>
        <img src={image} className={styles.image} alt="" />
      </header>
      <ul className={styles.stats}>
        {kind === 'user' && (
          <>
            <li>
              <b>{profile.playcount}</b> plays
            </li>
            <li>
              <b>{profile.artist_count}</b> artists
            </li>
            <li>
              <b>{profile.track_count}</b> tracks
            </li>
            <li>
              <b>{profile.album_count}</b> albums
            </li>
          </>
        )}

        {kind === 'artist' && (
          <>
            <li>
              <b>{profile.stats.playcount}</b> plays
            </li>
            <li>
              <b>{profile.stats.listeners}</b> listeners
            </li>
          </>
        )}
      </ul>
    </article>
  );
}
