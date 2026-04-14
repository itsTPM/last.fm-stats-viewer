import styles from './MediaPreview.module.css';
import Skeleton from '@/components/ui/Skeleton/Skeleton';

interface Props {
  showArtist?: boolean;
}

export default function MediaPreviewSkeleton({ showArtist }: Props) {
  return (
    <article className={styles.media}>
      <Skeleton className={styles.image} />

      <Skeleton className={styles.titleSkeleton} />

      {showArtist && <Skeleton className={styles.textSkeleton} />}

      <Skeleton className={styles.textSkeleton} />
    </article>
  );
}
