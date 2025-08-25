import type { ComponentProps, ElementType } from 'react';
import styles from './styles.module.css';

interface Props extends ComponentProps<'button'> {
  IconIdle: ElementType;
  IconActive: ElementType;
  status?: 'idle' | 'active';
}

export function ButtonCustom(props: Props) {
  const status = props.status === 'active' ? styles.active : styles.idle;

  const className = props.className
    ? `${styles.container} ${props.className} ${status}`
    : `${styles.container} ${status}`;

  return (
    <button {...props} className={className}>
      {props.status === 'active' ? (
        <props.IconActive className={styles.icon} />
      ) : (
        <props.IconIdle className={styles.icon} />
      )}
    </button>
  );
}
