import type { ComponentProps, ElementType } from 'react';

import styles from './styles.module.css';

interface Props extends ComponentProps<'button'> {
  Icon: ElementType;
  status: 'idle' | 'active';
}

export function ButtonCustom(props: Props) {
  const className = props.className
    ? `${styles.container} ${props.className} ${styles[props.status]}`
    : `${styles.container} ${styles[props.status]}`;

  return (
    <button {...props} className={className}>
      <props.Icon className={styles.icon} />
    </button>
  );
}
