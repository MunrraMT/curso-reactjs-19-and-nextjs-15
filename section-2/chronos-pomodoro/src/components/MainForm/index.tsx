import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';

import { Section } from '../Section';
import { InputCustom } from '../InputCustom';
import { Cycles } from '../Cycles';
import { ButtonCustom } from '../ButtonCustom';

import styles from './styles.module.css';

export function MainForm() {
  const handle_create_new_task = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <Section>
      <form className={styles.form} onSubmit={handle_create_new_task}>
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
