import { useEffect, useState } from 'react';

import { initial_task_state } from './initial_task_state';
import { TaskContext } from './TaskContext';

type TaskContextProviderProps = {
  children: React.ReactNode;
};

export function TaskContextProvider(props: TaskContextProviderProps) {
  const [state, setState] = useState(initial_task_state);

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <TaskContext.Provider value={{ state, setState }}>
      {props.children}
    </TaskContext.Provider>
  );
}
