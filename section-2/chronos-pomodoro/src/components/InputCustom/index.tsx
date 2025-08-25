import type { ComponentProps } from 'react';
import styles from './styles.module.css';

interface Props extends ComponentProps<'input'> {
  label: string;
}

export function InputCustom(props: Props) {
  const className = props.className
    ? `${styles.input_text} ${props.className}`
    : styles.input_text;

  return (
    <>
      <label className={styles.label} htmlFor={props.name}>
        {props.label}
      </label>
      <input {...props} className={className} />
    </>
  );
}
