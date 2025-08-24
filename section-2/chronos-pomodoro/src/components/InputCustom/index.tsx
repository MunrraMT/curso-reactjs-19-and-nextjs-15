import type { ComponentProps } from 'react';
import styles from './styles.module.css';

interface Props {
  label: string;
  name: string;
  placeholder: string;
  type: ComponentProps<'input'>['type'];
}

export function InputCustom(props: Props) {
  return (
    <>
      <label className={styles.label} htmlFor={props.name}>
        {props.label}
      </label>
      <input
        className={styles.input_text}
        type={props.type}
        name={props.name}
        id={props.name}
        placeholder={props.placeholder}
      />
    </>
  );
}
