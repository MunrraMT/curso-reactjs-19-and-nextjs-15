import { useEffect, useReducer, useState } from 'react';

import { initial_task_state } from './initial_task_state';
import { TaskContext } from './TaskContext';

type TaskContextProviderProps = {
  children: React.ReactNode;
};

export function TaskContextProvider(props: TaskContextProviderProps) {
  const [state, setState] = useState(initial_task_state);

  const [numero, dispatch] = useReducer((state, action) => {
    console.log({ state, action });

    switch (action) {
      case 'D':
        return state - 1;

      case 'I':
        return state + 1;

      default:
        return state;
    }
  }, 0);

  // useEffect(() => {
  //   console.log(state);
  // }, [state]);

  return (
    <TaskContext.Provider value={{ state, setState }}>
      <button
        type="button"
        onClick={() => {
          dispatch('D');
        }}
      >
        -
      </button>
      {numero}
      <button
        type="button"
        onClick={() => {
          dispatch('I');
        }}
      >
        +
      </button>
    </TaskContext.Provider>
  );
}
