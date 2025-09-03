import { useState } from 'react';

import { Home } from './pages/home';
import type { TaskStateModel } from './models/TaskStateModel';

import './styles/theme.css';
import './styles/global.css';

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

export function App() {
  const [state, set_state] = useState(initial_state);
  return <Home />;
}
