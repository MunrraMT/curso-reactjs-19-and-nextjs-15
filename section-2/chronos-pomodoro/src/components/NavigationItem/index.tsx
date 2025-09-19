import type { ElementType } from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router';

interface Props {
  title: string;
  Icon: ElementType;
  url?: string;
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
        <Link
          to={props.url || '/'}
          title={props.title}
          aria-label={props.title}
          className={styles.link}
        >
          <props.Icon className={styles.icon} />
        </Link>
      )}
    </li>
  );
}
