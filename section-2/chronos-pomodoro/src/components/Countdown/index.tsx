import { Section } from '../Section';
import { use_task_context } from '../../contexts/TaskContext';

import styles from './styles.module.css';

export function Countdown() {
  const { state } = use_task_context();
  console.log({ state });

  return (
    <Section>
      <p className={styles.container}>00:00</p>
    </Section>
  );
}
