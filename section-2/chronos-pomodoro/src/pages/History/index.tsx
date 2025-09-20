import { TrashIcon } from 'lucide-react';

import { ButtonCustom } from '../../components/ButtonCustom';
import { Heading } from '../../components/Heading';
import { MainTemplate } from '../../templates/MainTemplate';
import { Section } from '../../components/Section';
import { useTaskContext } from '../../contexts/TaskContext';

import styles from './styles.module.css';
import type { TaskModel } from '../../models/TaskModel';
import { formatDate } from '../../utils/formatDate';
import { getTaskStatus } from '../../utils/getTaskStatus';
import { sortTasks } from '../../utils/sortTasks';

export function History() {
  const { state } = useTaskContext();

  const sortedTask = sortTasks({ tasks: state.tasks });

  const taskTypeDictionary: Record<TaskModel['type'], string> = {
    workTime: 'Foco',
    shortBreakTime: 'Descanso Curto',
    longBreakTime: 'Descanso Longo',
  };

  return (
    <MainTemplate>
      <Heading>
        <span>History</span>
        <ButtonCustom
          status="active"
          className={styles.buttonContainer}
          Icon={TrashIcon}
          aria-label="Apagar todo o histórico"
          title="Apagar histórico"
        />
      </Heading>

      <Section>
        <div className={styles.responsiveTable}>
          <table>
            <thead>
              <tr>
                <th>Tarefa</th>
                <th>Duração</th>
                <th>Data</th>
                <th>Status</th>
                <th>Tipo</th>
              </tr>
            </thead>
            <tbody>
              {sortedTask.map((task) => (
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
      </Section>
    </MainTemplate>
  );
}
