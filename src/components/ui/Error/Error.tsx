import styles from './Error.module.css';

export default function Error({ message = 'There was an error while loading this request' }: { message?: string }) {
  return <p className={styles.error}>{message}</p>;
}
