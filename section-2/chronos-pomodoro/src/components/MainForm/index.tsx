import { useRef } from 'react';
import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';

import { Section } from '../Section';
import { InputCustom } from '../InputCustom';
import { Cycles } from '../Cycles';
import { ButtonCustom } from '../ButtonCustom';
import type { TaskModel } from '../../models/TaskModel';
import { useTaskContext } from '../../contexts/TaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';

import styles from './styles.module.css';

export function MainForm() {
  const { state, setState } = useTaskContext();
  const taskNameInput = useRef<HTMLInputElement>(null);

  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  const handle_create_new_task = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!taskNameInput.current) return;

    const task_name = taskNameInput.current?.value.trim();

    if (!task_name) {
      alert('Digite o nome da tarefa');
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

    const secondsRemaining = newTask.duration * 60;

    setState((prev) => ({
      ...prev,
      activeTask: newTask,
      currentCycle: nextCycle,
      secondsRemaining,
      formattedSecondsRemaining: '00:00',
      tasks: [...prev.tasks, newTask],
      config: { ...prev.config },
    }));
  };

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
