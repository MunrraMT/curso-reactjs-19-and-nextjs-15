import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';

import styles from './styles.module.css';
import { NavigationItem } from '../NavigationItem';
import { useEffect, useState } from 'react';

type DataTheme = 'dark' | 'light';

export function Navigation() {
  const [theme, set_theme] = useState<DataTheme>('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const change_theme = () => {
    set_theme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <nav className={styles.container}>
      <ul className={styles.list}>
        <NavigationItem title="Ir para home" Icon={HouseIcon} />
        <NavigationItem title="Ver histórico" Icon={HistoryIcon} />
        <NavigationItem title="Configurações" Icon={SettingsIcon} />
        <NavigationItem
          title="Trocar tema"
          Icon={SunIcon}
          onClick={change_theme}
        />
      </ul>
    </nav>
  );
}
