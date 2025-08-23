import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';

import styles from './styles.module.css';
import { NavigationItem } from '../NavigationItem';

export function Navigation() {
  return (
    <nav className={styles.container}>
      <ul className={styles.list}>
        <NavigationItem Icon={HouseIcon} />
        <NavigationItem Icon={HistoryIcon} />
        <NavigationItem Icon={SettingsIcon} />
        <NavigationItem Icon={SunIcon} />
      </ul>
    </nav>
  );
}
