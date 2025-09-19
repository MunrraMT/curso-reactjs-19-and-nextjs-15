import { useRef } from 'react';
import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';

import { Section } from '../Section';
import { InputCustom } from '../InputCustom';
import { Cycles } from '../Cycles';
import { ButtonCustom } from '../ButtonCustom';
import { useTaskContext } from '../../contexts/TaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
import { TaskActionTypes } from '../../contexts/TaskContext/taskActions';
import { TipsForNextTask } from '../Tips';
import { showMessage } from '../../adapters/showMessage';

import type { TaskModel } from '../../models/TaskModel';

import styles from './styles.module.css';

export function MainForm() {
  const { state, dispatch } = useTaskContext();
  const taskNameInput = useRef<HTMLInputElement>(null);

  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  const handle_create_new_task = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!taskNameInput.current) return;

    const task_name = taskNameInput.current?.value.trim();

    if (!task_name) {
      showMessage.warning('Digite o nome da tarefa');
      return;
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: task_name,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: state.config[nextCycleType],
      type: nextCycleType,
    };

    showMessage.success('Tarefa iniciada');
    dispatch({ type: TaskActionTypes.START_TASK, payload: newTask });
  };

  function handleInterruptTask() {
    showMessage.error('Tarefa interrompida');
    dispatch({ type: TaskActionTypes.INTERRUPT_TASK });
  }

  return (
    <Section>
      <form className={styles.form} onSubmit={handle_create_new_task}>
        <InputCustom
          ref={taskNameInput}
          label="task"
          id="new_task"
          name="new_task"
          placeholder="Digite algo"
          type="text"
          disabled={!!state.activeTask}
        />

        <p className={styles.next_step}>
          <TipsForNextTask />
        </p>

        {state.currentCycle > 0 && <Cycles />}
        {!!state.activeTask ? (
          <ButtonCustom
            key="active"
            status="active"
            type="button"
            title="Interromper tarefa atual"
            aria-label="Interromper tarefa atual"
            Icon={StopCircleIcon}
            onClick={handleInterruptTask}
          />
        ) : (
          <ButtonCustom
            key="idle"
            status="idle"
            type="submit"
            title="Iniciar nova tarefa"
            aria-label="Iniciar nova tarefa"
            Icon={PlayCircleIcon}
          />
        )}
      </form>
    </Section>
  );
}
