import type { ReactNode } from 'react';

import styles from './styles.module.css';

interface Props {
  children: ReactNode;
}

export function Footer(props: Props) {
  return <footer className={styles.container}>{props.children}</footer>;
}
