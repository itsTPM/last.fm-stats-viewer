import MediaPreviewSkeleton from '@/components/MediaPreview/MediaPreviewSkeleton';
import styles from './MediaSection.module.css';

interface Props {
  title: string;
  kind: 'artist' | 'album';
}

export default function MediaSectionSkeleton({ title, kind }: Props) {
  const showArtist = kind === 'album';

  return (
    <section>
      <h2>{title}</h2>
      <ol className={styles.list}>
        {Array.from({ length: 3 }).map((_, i) => (
          <li key={i}>
            <MediaPreviewSkeleton showArtist={showArtist} />
          </li>
        ))}
      </ol>
    </section>
  );
}
