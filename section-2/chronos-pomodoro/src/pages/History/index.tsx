import { useEffect, useState } from 'react';
import { ArrowUpDownIcon, TrashIcon } from 'lucide-react';

import { ButtonCustom } from '../../components/ButtonCustom';
import { Heading } from '../../components/Heading';
import { MainTemplate } from '../../templates/MainTemplate';
import { Section } from '../../components/Section';
import { useTaskContext } from '../../contexts/TaskContext';
import { sortTasks, type SortTasksOptions } from '../../utils/sortTasks';
import { formatDate } from '../../utils/formatDate';
import { getTaskStatus } from '../../utils/getTaskStatus';
import { TaskActionTypes } from '../../contexts/TaskContext/taskActions';
import type { TaskModel } from '../../models/TaskModel';

import styles from './styles.module.css';

export function History() {
  const { state, dispatch } = useTaskContext();

  const [sortTaskOptions, setSortTaskOptions] = useState<SortTasksOptions>(
    () => {
      return {
        tasks: sortTasks({ tasks: state.tasks }),
        field: 'startDate',
        direction: 'desc',
      };
    },
  );

  useEffect(() => {
    setSortTaskOptions((prev) => ({
      ...prev,
      tasks: sortTasks({
        tasks: state.tasks,
        direction: prev.direction,
        field: prev.field,
      }),
    }));
  }, [state.tasks]);

  function handleSortTasks({ field }: Pick<SortTasksOptions, 'field'>) {
    const newDirection: SortTasksOptions['direction'] =
      sortTaskOptions.direction === 'desc' ? 'asc' : 'desc';

    setSortTaskOptions({
      tasks: sortTasks({
        direction: newDirection,
        tasks: sortTaskOptions.tasks,
        field,
      }),
      direction: newDirection,
      field,
    });
  }

  function handleResetHistory() {
    if (!confirm('Tem certeza')) return;
    dispatch({ type: TaskActionTypes.RESET_STATE });
  }

  const hasTasks = state.tasks.length > 0;

  const taskTypeDictionary: Record<TaskModel['type'], string> = {
    workTime: 'Foco',
    shortBreakTime: 'Descanso Curto',
    longBreakTime: 'Descanso Longo',
  };

  return (
    <MainTemplate>
      <Heading>
        <span>History</span>
        {hasTasks && (
          <ButtonCustom
            status="active"
            className={styles.buttonContainer}
            Icon={TrashIcon}
            aria-label="Apagar todo o histórico"
            title="Apagar histórico"
            onClick={handleResetHistory}
          />
        )}
      </Heading>

      <Section>
        {hasTasks && (
          <div className={styles.responsiveTable}>
            <table>
              <thead>
                <tr>
                  <th
                    className={styles.thSort}
                    onClick={() => handleSortTasks({ field: 'name' })}
                  >
                    <span className={styles.thSortContent}>
                      Tarefa
                      <ArrowUpDownIcon className={styles.thSortIcon} />
                    </span>
                  </th>
                  <th
                    className={styles.thSort}
                    onClick={() => handleSortTasks({ field: 'duration' })}
                  >
                    <span className={styles.thSortContent}>
                      Duração
                      <ArrowUpDownIcon className={styles.thSortIcon} />
                    </span>
                  </th>
                  <th
                    className={styles.thSort}
                    onClick={() => handleSortTasks({ field: 'startDate' })}
                  >
                    <span className={styles.thSortContent}>
                      Data
                      <ArrowUpDownIcon className={styles.thSortIcon} />
                    </span>
                  </th>
                  <th>Status</th>
                  <th>Tipo</th>
                </tr>
              </thead>
              <tbody>
                {sortTaskOptions.tasks.map((task) => (
                  <tr key={task.id}>
                    <td align="center">{task.name}</td>
                    <td align="center">{task.duration}min</td>
                    <td align="center">{formatDate(task.startDate)}</td>
                    <td align="center">
                      {getTaskStatus(task, state.activeTask)}
                    </td>
                    <td align="center">{taskTypeDictionary[task.type]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {!hasTasks && (
          <p style={{ padding: '24px', fontWeight: 'bold' }}>
            Ainda não existem tarefas criadas
          </p>
        )}
      </Section>
    </MainTemplate>
  );
}
