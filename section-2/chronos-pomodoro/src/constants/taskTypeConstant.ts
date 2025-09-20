import type { TaskModel } from '../models/TaskModel';

export const taskTypeConstant: Record<TaskModel['type'], TaskModel['type']> = {
  workTime: 'workTime',
  shortBreakTime: 'shortBreakTime',
  longBreakTime: 'longBreakTime',
} as const;
