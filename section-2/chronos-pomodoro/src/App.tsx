import { Header } from './components/Header';
import { Main } from './components/Main';
import { Section } from './components/Section';
import { Footer } from './components/Footer';
import { Logo } from './components/Logo';
import { Navigation } from './components/Navigation';
import { Countdown } from './components/Countdown';
import { Form } from './components/Form';

import './styles/theme.css';
import './styles/global.css';

export function App() {
  return (
    <>
      <Header>
        <Logo />
        <Navigation />
      </Header>
      <Main>
        <Countdown />
        <Form />
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
