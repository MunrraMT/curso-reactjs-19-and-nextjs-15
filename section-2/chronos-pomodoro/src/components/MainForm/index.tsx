import type { FormEvent } from 'react';
import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';

import { Section } from '../Section';
import { InputCustom } from '../InputCustom';
import { Cycles } from '../Cycles';
import { ButtonCustom } from '../ButtonCustom';

import styles from './styles.module.css';
import { useTaskContext } from '../../contexts/TaskContext';

export function MainForm() {
  const { set_state } = useTaskContext();
  const handle_submit = (event: FormEvent) => {
    event.preventDefault();
    set_state((prev) => ({ ...prev, formattedSecondsRemaining: '10:22' }));
  };

  return (
    <Section>
      <form className={styles.form} onSubmit={handle_submit}>
        <InputCustom
          label="task"
          id="new_task"
          name="new_task"
          placeholder="Digite algo"
          type="text"
        />

        <p className={styles.next_step}>
          Próximo ciclo é de <strong>25min</strong>
        </p>

        <Cycles />
        <ButtonCustom
          title="Iniciar nova tarefa"
          IconIdle={PlayCircleIcon}
          IconActive={StopCircleIcon}
        />
      </form>
    </Section>
  );
}
