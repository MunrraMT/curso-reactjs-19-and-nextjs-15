import { createContext, useContext, useState } from 'react';

import type { TaskStateModel } from '../../models/TaskStateModel';

const initial_state: TaskStateModel = {
  tasks: [],
  secondsRemaining: 0,
  formattedSecondsRemaining: '00:00',
  activeTask: null,
  currentCycle: 0,
  config: {
    workTime: 25,
    shortBreakTime: 5,
    longBreakTime: 15,
  },
};

type TaskContextProps = {
  state: TaskStateModel;
  set_state: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};

const initial_context_value = {
  state: initial_state,
  set_state: () => {},
};

export const TaskContext = createContext<TaskContextProps>(
  initial_context_value,
);

type TaskContextProviderProps = {
  children: React.ReactNode;
};

export function TaskContextProvider(props: TaskContextProviderProps) {
  const [state, set_state] = useState(initial_state);

  return (
    <TaskContext.Provider value={{ state, set_state }}>
      {props.children}
    </TaskContext.Provider>
  );
}

export function useTaskContext() {
  return useContext(TaskContext);
}
