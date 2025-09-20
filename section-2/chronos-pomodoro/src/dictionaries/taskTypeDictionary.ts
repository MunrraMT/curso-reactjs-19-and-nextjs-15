import type { TaskModel } from '../models/TaskModel';

export const taskTypeDictionary: Record<TaskModel['type'], string> = {
  workTime: 'Foco',
  shortBreakTime: 'Descanso Curto',
  longBreakTime: 'Descanso Longo',
};
