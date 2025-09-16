import { useEffect, useReducer } from 'react';

import { initial_task_state } from './initial_task_state';
import { TaskContext } from './TaskContext';
import { taskReducer } from './taskReducer';

type TaskContextProviderProps = {
  children: React.ReactNode;
};

export function TaskContextProvider(props: TaskContextProviderProps) {
  const [state, dispatch] = useReducer(taskReducer, initial_task_state);

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {props.children}
    </TaskContext.Provider>
  );
}
