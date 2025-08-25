import { Section } from '../Section';

import styles from './styles.module.css';

export function Footer() {
  return (
    <footer className={styles.container}>
      <Section>
        <p>Entenda como funciona a técnica pomodoro</p>
      </Section>
      <Section>
        <a href="/" className={styles.link}>
          Chronos Pomodoro &copy; {new Date().getFullYear()} - Feito com 💚
        </a>
      </Section>
    </footer>
  );
}
