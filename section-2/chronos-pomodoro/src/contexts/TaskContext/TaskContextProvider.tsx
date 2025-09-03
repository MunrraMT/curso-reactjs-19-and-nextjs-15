import { useState } from 'react';

import { initial_task_state } from './initial_task_state';
import { TaskContext } from './TaskContext';

type TaskContextProviderProps = {
  children: React.ReactNode;
};

export function TaskContextProvider(props: TaskContextProviderProps) {
  const [state, set_state] = useState(initial_task_state);

  return (
    <TaskContext.Provider value={{ state, set_state }}>
      {props.children}
    </TaskContext.Provider>
  );
}
