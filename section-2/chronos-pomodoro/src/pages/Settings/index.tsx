import { Heading } from '../../components/Heading';
import { InputCustom } from '../../components/InputCustom';
import { Section } from '../../components/Section';
import { taskTypeDictionary } from '../../dictionaries/taskTypeDictionary';
import { MainTemplate } from '../../templates/MainTemplate';
import { taskTypeConstant } from '../../constants/taskTypeConstant';
import { useTaskContext } from '../../contexts/TaskContext';

import styles from './styles.module.css';
import { ButtonCustom } from '../../components/ButtonCustom';
import { SaveIcon } from 'lucide-react';
import { useRef } from 'react';
import { TaskActionTypes } from '../../contexts/TaskContext/taskActions';

export function Settings() {
  const { state, dispatch } = useTaskContext();

  const workTimeInputRef = useRef<HTMLInputElement>(null);
  const shortBreakTimeInputRef = useRef<HTMLInputElement>(null);
  const longBreakTimeInputRef = useRef<HTMLInputElement>(null);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const workTime = workTimeInputRef.current?.value;
    const shortBreakTime = shortBreakTimeInputRef.current?.value;
    const longBreakTime = longBreakTimeInputRef.current?.value;

    // dispatch({type: TaskActionTypes.})
  }

  return (
    <MainTemplate>
      <Heading>Configurações</Heading>

      <Section>
        <p className={styles.subtitle}>
          Modifique as configurações para tempo de foco, descanso curto e
          descanso longo
        </p>
      </Section>

      <Section>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formRow}>
            <InputCustom
              ref={workTimeInputRef}
              label={taskTypeDictionary.workTime}
              id={taskTypeConstant.workTime}
              name={taskTypeConstant.workTime}
              placeholder="Digite algo"
              type="number"
              defaultValue={state.config.workTime}
            />
          </div>

          <div className={styles.formRow}>
            <InputCustom
              ref={shortBreakTimeInputRef}
              label={taskTypeDictionary.shortBreakTime}
              id={taskTypeConstant.shortBreakTime}
              name={taskTypeConstant.shortBreakTime}
              placeholder="Digite algo"
              type="number"
              defaultValue={state.config.shortBreakTime}
            />
          </div>

          <div className={styles.formRow}>
            <InputCustom
              ref={longBreakTimeInputRef}
              label={taskTypeDictionary.longBreakTime}
              id={taskTypeConstant.longBreakTime}
              name={taskTypeConstant.longBreakTime}
              placeholder="Digite algo"
              type="number"
              defaultValue={state.config.longBreakTime}
            />
          </div>

          <ButtonCustom
            key="idle"
            status="idle"
            type="submit"
            title="Salvar configurações"
            aria-label="Salvar configurações"
            Icon={SaveIcon}
          />
        </form>
      </Section>
    </MainTemplate>
  );
}
