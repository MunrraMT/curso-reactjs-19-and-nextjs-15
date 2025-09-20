import { createContext } from 'react';

import type { TaskStateModel } from '../../models/TaskStateModel';
import { initial_task_state } from './initial_task_state';
import type { TaskActionModel } from './taskActions';

export type TaskContextProps = {
  state: TaskStateModel;
  dispatch: React.ActionDispatch<[action: TaskActionModel]>;
};

export const initial_context_value = {
  state: initial_task_state,
  dispatch: () => {},
};

export const TaskContext = createContext<TaskContextProps>(
  initial_context_value,
);
