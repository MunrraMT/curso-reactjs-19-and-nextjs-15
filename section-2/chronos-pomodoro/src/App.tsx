import { Header } from './components/Header';
import { Main } from './components/Main';
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
      <Footer />
    </>
  );
}
