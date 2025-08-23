import './styles/theme.css';
import './styles/global.css';

import { Header } from './components/Header';
import { Main } from './components/Main';
import { Section } from './components/Section';
import { Footer } from './components/Footer';
import { Logo } from './components/Logo';
import { Navigation } from './components/Navigation';
import { Countdown } from './components/Countdown';

export function App() {
  return (
    <>
      <Header>
        <Logo />
        <Navigation />
      </Header>
      <Main>
        <Countdown />
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
