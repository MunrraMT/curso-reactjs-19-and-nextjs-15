import type { ElementType } from 'react';

import { RouterLink } from '../RouterLink';

import styles from './styles.module.css';

interface Props {
  title: string;
  Icon: ElementType;
  href?: string;
  onClick?: () => void;
}

export function NavigationItem(props: Props) {
  return (
    <li className={styles.item}>
      {props.onClick ? (
        <button
          title={props.title}
          aria-label={props.title}
          className={styles.link}
          onClick={props.onClick}
        >
          <props.Icon className={styles.icon} />
        </button>
      ) : (
        <RouterLink
          href={props.href || '/'}
          title={props.title}
          aria-label={props.title}
          className={styles.link}
        >
          <props.Icon className={styles.icon} />
        </RouterLink>
      )}
    </li>
  );
}
