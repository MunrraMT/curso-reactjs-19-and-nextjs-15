import { useTaskContext } from '../../contexts/TaskContext';
import type { TaskModel } from '../../models/TaskModel';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';

import styles from './styles.module.css';

export function Cycles() {
  const { state } = useTaskContext();
  const steps = Array.from({ length: state.currentCycle });
  const cycleDescriptionMap: Record<TaskModel['type'], string> = {
    workTime: 'foco',
    shortBreakTime: 'descanso curto',
    longBreakTime: 'descanso longo',
  };
  return (
    <div className={styles.container}>
      <p className={styles.label}>Ciclos:</p>
      <div className={styles.list}>
        {steps.map((_, index) => {
          const nextCycle = getNextCycle(index);
          const nextCycleType = getNextCycleType(nextCycle);
          return (
            <span
              key={`${nextCycleType}_${nextCycle}`}
              title={`Indicador de ciclo de ${cycleDescriptionMap[nextCycleType]}`}
              aria-label={`Indicador de ciclo de ${cycleDescriptionMap[nextCycleType]}`}
              className={`${styles.item} ${styles[nextCycleType]}`}
            ></span>
          );
        })}
      </div>
    </div>
  );
}
