import { useEffect, useReducer } from 'react';

import { initial_task_state } from './initial_task_state';
import { TaskContext } from './TaskContext';
import { taskReducer } from './taskReducer';
import { TimerWorkerManager } from '../../workers/TimerWorkerManager';
import { TaskActionTypes } from './taskActions';

type TaskContextProviderProps = {
  children: React.ReactNode;
};

export function TaskContextProvider(props: TaskContextProviderProps) {
  const [state, dispatch] = useReducer(taskReducer, initial_task_state);

  const worker = TimerWorkerManager.getInstance();

  worker.onmessage((event) => {
    const countDownSeconds = event.data;
    if (countDownSeconds <= 0) {
      dispatch({ type: TaskActionTypes.COMPLETE_TASK });
      worker.terminate();
    } else {
      dispatch({
        type: TaskActionTypes.COUNT_DOWN,
        payload: { secondsRemaining: countDownSeconds },
      });
    }
  });

  useEffect(() => {
    if (!state.activeTask) {
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
