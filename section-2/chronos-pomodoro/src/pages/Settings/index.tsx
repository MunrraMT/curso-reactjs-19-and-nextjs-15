import { useRef } from 'react';
import { SaveIcon } from 'lucide-react';

import { Heading } from '../../components/Heading';
import { InputCustom } from '../../components/InputCustom';
import { Section } from '../../components/Section';
import { taskTypeDictionary } from '../../dictionaries/taskTypeDictionary';
import { MainTemplate } from '../../templates/MainTemplate';
import { taskTypeConstant } from '../../constants/taskTypeConstant';
import { useTaskContext } from '../../contexts/TaskContext';
import { ButtonCustom } from '../../components/ButtonCustom';

import styles from './styles.module.css';
import { showMessage } from '../../adapters/showMessage';

export function Settings() {
  const { state } = useTaskContext();

  const workTimeInputRef = useRef<HTMLInputElement>(null);
  const shortBreakTimeInputRef = useRef<HTMLInputElement>(null);
  const longBreakTimeInputRef = useRef<HTMLInputElement>(null);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    let formErros = [];
    const workTime = Number(workTimeInputRef.current?.value);
    const shortBreakTime = Number(shortBreakTimeInputRef.current?.value);
    const longBreakTime = Number(longBreakTimeInputRef.current?.value);

    if (isNaN(workTime) || isNaN(shortBreakTime) || isNaN(longBreakTime)) {
      formErros.push('Use apenas números para todos os campos');
    }

    if (workTime < 1 || workTime > 60) {
      formErros.push('O foco deve ter valor entre 1 e 60');
    }

    if (shortBreakTime < 1 || shortBreakTime > 20) {
      formErros.push('O descanso curto deve ter valor entre 1 e 20');
    }

    if (longBreakTime < 1 || longBreakTime > 45) {
      formErros.push('O descanso longo deve ter valor entre 1 e 45');
    }

    if (formErros.length > 0) {
      formErros.forEach((error) => {
        showMessage.error(error);
      });
      formErros = [];
    } else {
    }
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
              min={1}
              max={60}
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
              min={1}
              max={20}
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
              min={1}
              max={45}
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
