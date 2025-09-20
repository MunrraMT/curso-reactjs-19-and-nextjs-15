import { taskTypeConstant } from '../constants/taskTypeConstant';
import type { TaskModel } from '../models/TaskModel';

export function getNextCycleType(currentCycle: number): TaskModel['type'] {
  if (currentCycle === 8) return taskTypeConstant.longBreakTime;
  if (currentCycle % 2 === 0) return taskTypeConstant.shortBreakTime;
  return taskTypeConstant.workTime;
}
