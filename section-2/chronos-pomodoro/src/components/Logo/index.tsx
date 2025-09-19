import { TimerIcon } from 'lucide-react';

import { RouterLink } from '../RouterLink';

import styles from './styles.module.css';

export function Logo() {
  return (
    <h1 className={styles.container}>
      <RouterLink className={styles.link} href="/">
        <TimerIcon className={styles.icon} />
        <span className={styles.label}>Chronos</span>
      </RouterLink>
    </h1>
  );
}
