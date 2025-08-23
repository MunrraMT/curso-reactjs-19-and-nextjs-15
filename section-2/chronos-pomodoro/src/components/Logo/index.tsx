import { TimerIcon } from 'lucide-react';

import styles from './styles.module.css';

export function Logo() {
  return (
    <h1 className={styles.container}>
      <a className={styles.link} href="/">
        <TimerIcon className={styles.icon} />
        <span className={styles.label}>Chronos</span>
      </a>
    </h1>
  );
}
