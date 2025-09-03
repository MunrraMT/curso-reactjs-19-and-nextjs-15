import { Section } from '../Section';
import type { TaskStateModel } from '../../models/TaskStateModel';

import styles from './styles.module.css';

interface Props {
  formattedSecondsRemaining: TaskStateModel['formattedSecondsRemaining'];
}

export function Countdown(props: Props) {
  return (
    <Section>
      <p className={styles.container}>{props.formattedSecondsRemaining}</p>
    </Section>
  );
}
