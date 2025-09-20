import { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router';

import { Home } from '../../pages/home';
import { AboutPomodoro } from '../../pages/AboutPomodoro';
import { NotFound } from '../../pages/NotFound';
import { History } from '../../pages/History';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}

export function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/history/" Component={History} />
        <Route path="/about-pomodoro/" Component={AboutPomodoro} />
        <Route path="*" Component={NotFound} />
      </Routes>
      <ScrollToTop />
    </BrowserRouter>
  );
}
