import styles from './Skeleton.module.css';

export default function Skeleton({ className }: { className?: string }) {
  return <div className={[styles.skeleton, className].filter(Boolean).join(' ')} />;
}
