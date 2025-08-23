import type { ReactNode } from 'react';

import styles from './Main.module.css';

interface Props {
  children: ReactNode;
}

export function Main(props: Props) {
  return <main className={styles.container}>{props.children}</main>;
}
