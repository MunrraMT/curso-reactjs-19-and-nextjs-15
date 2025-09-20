import { Section } from '../Section';
import { useTaskContext } from '../../contexts/TaskContext';

import styles from './styles.module.css';

export function Countdown() {
  const {
    state: { formattedSecondsRemaining },
  } = useTaskContext();

  return (
    <Section>
      <p className={styles.container}>{formattedSecondsRemaining}</p>
    </Section>
  );
}
