import type { ReactNode } from 'react';

import { Header } from '../../components/Header';
import { Logo } from '../../components/Logo';
import { Navigation } from '../../components/Navigation';
import { Main } from '../../components/Main';
import { Footer } from '../../components/Footer';

interface Props {
  children: ReactNode;
}

export function MainTemplate(props: Props) {
  return (
    <>
      <Header>
        <Logo />
        <Navigation />
      </Header>
      <Main>{props.children}</Main>
      <Footer />
    </>
  );
}
