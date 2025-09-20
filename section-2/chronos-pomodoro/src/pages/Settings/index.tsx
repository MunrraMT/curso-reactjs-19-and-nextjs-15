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

export function Settings() {
  const { state } = useTaskContext();

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
        <form className={styles.form}>
          <div className={styles.formRow}>
            <InputCustom
              label={taskTypeDictionary.workTime}
              id={taskTypeConstant.workTime}
              name={taskTypeConstant.workTime}
              placeholder="Digite algo"
              type="text"
              defaultValue={state.config.workTime}
            />
          </div>

          <div className={styles.formRow}>
            <InputCustom
              label={taskTypeDictionary.shortBreakTime}
              id={taskTypeConstant.shortBreakTime}
              name={taskTypeConstant.shortBreakTime}
              placeholder="Digite algo"
              type="text"
              defaultValue={state.config.shortBreakTime}
            />
          </div>

          <div className={styles.formRow}>
            <InputCustom
              label={taskTypeDictionary.longBreakTime}
              id={taskTypeConstant.longBreakTime}
              name={taskTypeConstant.longBreakTime}
              placeholder="Digite algo"
              type="text"
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
