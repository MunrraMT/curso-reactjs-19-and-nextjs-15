import { createContext } from 'react';

import type { TaskStateModel } from '../../models/TaskStateModel';
import { initial_task_state } from './initial_task_state';

export type TaskContextProps = {
  state: TaskStateModel;
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};

export const initial_context_value = {
  state: initial_task_state,
  setState: () => {},
};

export const TaskContext = createContext<TaskContextProps>(
  initial_context_value,
);
