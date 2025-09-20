import { Section } from '../Section';
import { RouterLink } from '../RouterLink';

import styles from './styles.module.css';

export function Footer() {
  return (
    <footer className={styles.container}>
      <Section>
        <RouterLink
          href="/about-pomodoro"
          className={styles.link}
          style={{ fontSize: '16px' }}
        >
          Entenda como funciona a técnica pomodoro
        </RouterLink>
      </Section>
      <Section>
        <RouterLink href="/" className={styles.link}>
          Chronos Pomodoro &copy; {new Date().getFullYear()} - Feito com 💚
        </RouterLink>
      </Section>
    </footer>
  );
}
