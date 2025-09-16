import { useTaskContext } from '../../contexts/TaskContext';
import type { TaskModel } from '../../models/TaskModel';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';

export function TipsForNextTask() {
  const { state } = useTaskContext();

  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  const tipsForWhenActiveTask: Record<TaskModel['type'], React.JSX.Element> = {
    workTime: (
      <span>
        Foque por <strong>{state.config.workTime}min</strong>
      </span>
    ),
    shortBreakTime: (
      <span>
        Descanse por <strong>({state.config.shortBreakTime}min)</strong>
      </span>
    ),
    longBreakTime: <span>Descanso longo</span>,
  };

  const tipsForNoActiveTask: Record<TaskModel['type'], React.JSX.Element> = {
    workTime: (
      <span>
        Próximo ciclo é de <strong>{state.config.workTime}min</strong>
      </span>
    ),
    shortBreakTime: (
      <span>
        Próximo descanso será curto{' '}
        <strong>({state.config.shortBreakTime}min)</strong>
      </span>
    ),
    longBreakTime: (
      <span>
        Próximo descanso será longo{' '}
        <strong>({state.config.longBreakTime}min)</strong>
      </span>
    ),
  };

  return !!state.activeTask
    ? tipsForWhenActiveTask[state.activeTask.type]
    : tipsForNoActiveTask[nextCycleType];
}
