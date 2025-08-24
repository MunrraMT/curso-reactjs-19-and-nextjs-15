import type { FormEvent } from 'react';

import { Section } from '../Section';

import styles from './styles.module.css';

export function Form() {
  const handle_submit = (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <Section>
      <form className={styles.form} onSubmit={handle_submit}>
        <label className={styles.label} htmlFor="new_task">
          task
        </label>
        <input
          className={styles.input_text}
          type="text"
          name="new_task"
          id="new_task"
          placeholder="digite algo"
        />

        <p className={styles.next_step}>
          Próximo ciclo é de <strong>25min</strong>
        </p>

        <p className={styles.steps_label}>Ciclos</p>
        <div className={styles.step_item}>0 0 0 0</div>

        <button className={styles.btn_submit} type="submit">
          Iniciar nova tarefa
        </button>
      </form>
    </Section>
  );
}
