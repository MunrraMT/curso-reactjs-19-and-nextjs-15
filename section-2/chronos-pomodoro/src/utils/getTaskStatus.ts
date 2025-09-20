import type { TaskModel } from '../models/TaskModel';
import type { TaskStateModel } from '../models/TaskStateModel';

export function getTaskStatus(
  task: TaskModel,
  activeTask: TaskStateModel['activeTask'],
) {
  if (task.completeDate) return 'Completa';
  if (task.interruptDate) return 'Interrompida';
  if (activeTask && task.id === activeTask.id) return 'Em progresso';
  return 'Abandonada';
}
