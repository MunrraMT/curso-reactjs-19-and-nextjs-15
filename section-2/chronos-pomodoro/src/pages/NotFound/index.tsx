import { useEffect } from 'react';
import { MainTemplate } from '../../templates/MainTemplate';

export function NotFound() {
  useEffect(() => {
    document.title = 'Página não encontrada - Chronos Pomodoro';
  }, []);

  return (
    <MainTemplate>
      <h1>Página não encontrada</h1>
    </MainTemplate>
  );
}
