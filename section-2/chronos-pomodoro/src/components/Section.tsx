import type { ReactNode } from 'react';

import styles from './Section.module.css';

interface Props {
  children: ReactNode;
}

export function Section(props: Props) {
  return <section className={styles.content}>{props.children}</section>;
}
