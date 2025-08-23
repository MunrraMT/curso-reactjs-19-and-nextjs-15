import type { ReactNode } from 'react';

import styles from './styles.module.css';

interface Props {
  children: ReactNode;
}

export function Header(props: Props) {
  return <header className={styles.container}>{props.children}</header>;
}
