import {
  HistoryIcon,
  HouseIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from 'lucide-react';

import styles from './styles.module.css';
import { NavigationItem } from '../NavigationItem';
import { useEffect, useState, type ComponentType } from 'react';

type AvailableTheme = 'dark' | 'light';

export function Navigation() {
  const [theme, set_theme] = useState<AvailableTheme>(() => {
    return (localStorage.getItem('data-theme') || 'dark') as AvailableTheme;
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('data-theme', theme);
  }, [theme]);

  const change_theme = () => {
    set_theme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const current_theme_icon: Record<AvailableTheme, ComponentType> = {
    dark: SunIcon,
    light: MoonIcon,
  };

  return (
    <nav className={styles.container}>
      <ul className={styles.list}>
        <NavigationItem title="Ir para home" Icon={HouseIcon} />
        <NavigationItem title="Ver histórico" Icon={HistoryIcon} />
        <NavigationItem title="Configurações" Icon={SettingsIcon} />
        <NavigationItem
          title="Trocar tema"
          Icon={current_theme_icon[theme]}
          onClick={change_theme}
        />
      </ul>
    </nav>
  );
}
