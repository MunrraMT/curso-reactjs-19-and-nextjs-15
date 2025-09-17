import { useEffect, useReducer } from 'react';

import { initial_task_state } from './initial_task_state';
import { TaskContext } from './TaskContext';
import { taskReducer } from './taskReducer';
import { TimerWorkerManager } from '../../workers/TimeWorkerManager';

type TaskContextProviderProps = {
  children: React.ReactNode;
};

export function TaskContextProvider(props: TaskContextProviderProps) {
  const [state, dispatch] = useReducer(taskReducer, initial_task_state);

  const worker = TimerWorkerManager.getInstance();

  worker.onmessage((event) => {
    const countDownSeconds = event.data;
    console.log(countDownSeconds);

    if (countDownSeconds <= 0) {
      console.log('Worker terminate');
      worker.terminate();
    }
  });

  useEffect(() => {
    if (!state.activeTask) {
      console.log('worker terminado por falta de active task');
      worker.terminate();
    } else {
      worker.postMessage(state);
    }
  }, [state, worker]);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {props.children}
    </TaskContext.Provider>
  );
}
