import type {
  LastFMArtistGetTopAlbumsResponse,
  LastFMUserGetTopAlbumsResponse,
  LastFMUserGetTopArtistsResponse,
} from 'lastfm-ts-api';
import { getImageUrl, pickBestImage } from '@/utils';
import MediaPreview from '@/components/MediaPreview/MediaPreview';
import styles from './MediaSection.module.css';

type Props = {
  title: string;
  list:
    | LastFMUserGetTopAlbumsResponse['topalbums']['album']
    | LastFMArtistGetTopAlbumsResponse['topalbums']['album']
    | LastFMUserGetTopArtistsResponse['topartists']['artist'];
};

export default function MediaSection({ list, title }: Props) {
  return (
    <section>
      <h2>{title}</h2>
      <ol className={styles.list}>
        {list.map((item) => (
          <li key={item.url}>
            <MediaPreview
              title={item.name}
              image={getImageUrl(pickBestImage(item.image))}
              playcount={item.playcount}
              artist={'artist' in item ? item.artist.name : undefined}
            />
          </li>
        ))}
      </ol>
    </section>
  );
}
