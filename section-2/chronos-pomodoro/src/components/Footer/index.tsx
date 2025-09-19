import { Link } from 'react-router';

import { Section } from '../Section';

import styles from './styles.module.css';

export function Footer() {
  return (
    <footer className={styles.container}>
      <Section>
        <Link
          to="/about-pomodoro"
          className={styles.link}
          style={{ fontSize: '16px' }}
        >
          Entenda como funciona a técnica pomodoro
        </Link>
      </Section>
      <Section>
        <Link to="/" className={styles.link}>
          Chronos Pomodoro &copy; {new Date().getFullYear()} - Feito com 💚
        </Link>
      </Section>
    </footer>
  );
}
