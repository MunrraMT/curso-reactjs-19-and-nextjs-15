import type { ComponentProps } from 'react';
import styles from './styles.module.css';

interface Props extends ComponentProps<'input'> {
  id: string;
  label?: string;
}

export function InputCustom(props: Props) {
  const className = props.className
    ? `${styles.input_text} ${props.className}`
    : styles.input_text;

  return (
    <>
      {props.label && (
        <label className={styles.label} htmlFor={props.id}>
          {props.label}
        </label>
      )}
      <input {...props} id={props.id} className={className} />
    </>
  );
}
