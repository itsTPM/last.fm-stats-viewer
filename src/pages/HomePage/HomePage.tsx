import { useState } from 'react';
import { useNavigate } from 'react-router';
import styles from './HomePage.module.css';

export default function HomePage() {
  const [username, setUsername] = useState(import.meta.env.VITE_DEFAULT_USERNAME ?? '');
  const [kind, setKind] = useState<'user' | 'artist'>('user');

  const navigate = useNavigate();

  function onSubmit(e: React.SubmitEvent) {
    e.preventDefault();

    if (!username) {
      return;
    }

    if (kind === 'user') {
      navigate(`/user/${username}`);
    } else if (kind === 'artist') {
      navigate(`/artist/${username}`);
    }
  }

  return (
    <>
      <h1 className={styles.title}>
        <span className={styles.brand}>last.fm</span> stats viewer
      </h1>

      <form onSubmit={onSubmit}>
        <label htmlFor="username">Username</label>
        <fieldset role="group">
          <input
            id="username"
            placeholder={import.meta.env.VITE_DEFAULT_USERNAME}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <button>Go</button>
        </fieldset>

        <fieldset>
          <legend>Kind</legend>
          <input
            type="radio"
            id="user"
            name="kind"
            value="user"
            checked={kind === 'user'}
            onChange={() => setKind('user')}
          />
          <label htmlFor="user">User</label>
          <input
            type="radio"
            id="artist"
            name="kind"
            value="artist"
            checked={kind === 'artist'}
            onChange={() => setKind('artist')}
          />
          <label htmlFor="artist">Artist</label>
        </fieldset>
      </form>
    </>
  );
}
