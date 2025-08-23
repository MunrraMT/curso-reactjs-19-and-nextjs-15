import {
  HistoryIcon,
  HouseIcon,
  SettingsIcon,
  SunIcon,
  TimerIcon,
} from 'lucide-react';

import './styles/theme.css';
import './styles/global.css';

import { Header } from './components/Header';
import { Main } from './components/Main';
import { Section } from './components/Section';
import { Footer } from './components/Footer';

export function App() {
  return (
    <>
      <Header>
        <Section>
          <h1>
            <TimerIcon />
            <span>Chronos</span>
          </h1>
        </Section>
        <Section>
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
        </Section>
      </Header>
      <Main>
        <Section>
          <p>00:00</p>
        </Section>
        <Section>
          <form>
            <p>task</p>
            <label htmlFor="new_task">digite algo</label>
            <input type="text" name="new_task" id="new_task" />
            <p>
              Próximo ciclo é de <strong>25min</strong>
            </p>
            <button type="submit">Iniciar nova tarefa</button>
          </form>
        </Section>
      </Main>
      <Footer>
        <Section>
          <p>Entenda como funciona a técnica pomodoro</p>
        </Section>
        <Section>
          <a href="/">Chronos Pomodoro © 2025 - Feito com 💚</a>
        </Section>
      </Footer>
    </>
  );
}
