import Skeleton from '@/components/ui/Skeleton/Skeleton';
import styles from './Profile.module.css';

export default function ProfileSkeleton() {
  return (
    <article className={styles.profile}>
      <header className={styles.header}>
        <Skeleton className={styles.nameSkeleton} />
        <Skeleton className={styles.image} />
      </header>
      <Skeleton className={styles.statsSkeleton} />
    </article>
  );
}
