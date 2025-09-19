import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider';
import { MessagesProvider } from './components/MessagesContainer';
import { MainRouter } from './routers/MainRouter';

import './styles/theme.css';
import './styles/global.css';

export function App() {
  return (
    <TaskContextProvider>
      <MessagesProvider>
        <MainRouter />
      </MessagesProvider>
    </TaskContextProvider>
  );
}
