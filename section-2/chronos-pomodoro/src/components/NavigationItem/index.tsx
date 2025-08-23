import type { ElementType } from 'react';
import styles from './styles.module.css';

interface Props {
  Icon: ElementType;
}

export function NavigationItem(props: Props) {
  return (
    <li className={styles.item}>
      <a href="/" className={styles.link}>
        <props.Icon className={styles.icon} />
      </a>
    </li>
  );
}
