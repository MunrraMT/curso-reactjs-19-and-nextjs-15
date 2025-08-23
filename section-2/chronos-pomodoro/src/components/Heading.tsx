import type { ReactNode } from 'react';
import styles from './Heading.module.css';

interface Props {
  children: ReactNode;
}

export function Heading(props: Props) {
  return <h1 className={styles.heading}>{props.children}</h1>;
}
