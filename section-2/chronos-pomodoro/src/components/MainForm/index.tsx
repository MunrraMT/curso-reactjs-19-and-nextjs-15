import type { FormEvent } from 'react';
import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';

import { Section } from '../Section';
import { InputCustom } from '../InputCustom';
import { Cycles } from '../Cycles';
import { ButtonCustom } from '../ButtonCustom';

import styles from './styles.module.css';

export function MainForm() {
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
