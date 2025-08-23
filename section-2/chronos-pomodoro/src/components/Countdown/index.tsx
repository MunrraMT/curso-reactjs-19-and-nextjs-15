import { Section } from '../Section';

import styles from './styles.module.css';

export function Countdown() {
  return (
    <Section>
      <p className={styles.container}>00:00</p>
    </Section>
  );
}
