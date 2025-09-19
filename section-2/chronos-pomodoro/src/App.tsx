import { BrowserRouter, Route, Routes } from 'react-router';

import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider';
import { MessagesProvider } from './components/MessagesContainer';
import { Home } from './pages/home';
import { NotFound } from './pages/NotFound';
import { AboutPomodoro } from './pages/AboutPomodoro';

import './styles/theme.css';
import './styles/global.css';

export function App() {
  return (
    <TaskContextProvider>
      <MessagesProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/about-pomodoro/" Component={AboutPomodoro} />
            <Route path="*" Component={NotFound} />
          </Routes>
        </BrowserRouter>
      </MessagesProvider>
    </TaskContextProvider>
  );
}
