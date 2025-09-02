import type { ReactNode } from 'react';

import styles from './styles.module.css';

interface Props {
  children: ReactNode;
}

export function GenericHtml(props: Props) {
  return <div className={styles.genericHtml}>{props.children}</div>;
}
