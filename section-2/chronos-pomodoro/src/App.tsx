import {
  HistoryIcon,
  HouseIcon,
  SettingsIcon,
  SunIcon,
  TimerIcon,
} from 'lucide-react';

import './styles/theme.css';
import './styles/global.css';

export function App() {
  return (
    <>
      <header className="container">
        <h1>
          <TimerIcon />
          <span>Chronos</span>
        </h1>
        <nav>
          <ul>
            <li>
              <HouseIcon />
            </li>
            <li>
              <HistoryIcon />
            </li>
            <li>
              <SettingsIcon />
            </li>
            <li>
              <SunIcon />
            </li>
          </ul>
        </nav>
      </header>
      <main className="container">
        <section className="content">
          <p>00:00</p>
        </section>
        <section className="content">
          <form>
            <p>task</p>
            <label htmlFor="new_task">digite algo</label>
            <input type="text" name="new_task" id="new_task" />
            <p>
              Próximo ciclo é de <strong>25min</strong>
            </p>
            <button type="submit">Iniciar nova tarefa</button>
          </form>
        </section>
      </main>
      <footer className="container">
        <p>Entenda como funciona a técnica pomodoro</p>
        <a href="/">Chronos Pomodoro © 2025 - Feito com 💚</a>
      </footer>
    </>
  );
}
