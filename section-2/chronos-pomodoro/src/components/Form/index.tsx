import type { FormEvent } from 'react';
import { CirclePlay } from 'lucide-react';

import { Section } from '../Section';
import { InputCustom } from '../InputCustom';

import styles from './styles.module.css';

export function Form() {
  const handle_submit = (event: FormEvent) => {
    event.preventDefault();
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

        <p className={styles.steps_label}>Ciclos</p>
        <div className={styles.step_item}>0 0 0 0</div>

        <button
          title="Iniciar nova tarefa"
          className={styles.btn_submit}
          type="submit"
        >
          <CirclePlay className={styles.btn_submit_icon} />
        </button>
      </form>
    </Section>
  );
}
