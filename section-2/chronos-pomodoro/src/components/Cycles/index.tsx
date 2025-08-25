import styles from './styles.module.css';

export function Cycles() {
  return (
    <div className={styles.container}>
      <p className={styles.label}>Ciclos:</p>
      <div className={styles.list}>
        <span className={`${styles.item} ${styles.item_work}`}></span>
        <span className={`${styles.item} ${styles.item_short_rest}`}></span>
        <span className={`${styles.item} ${styles.item_work}`}></span>
        <span className={`${styles.item} ${styles.item_short_rest}`}></span>
        <span className={`${styles.item} ${styles.item_work}`}></span>
        <span className={`${styles.item} ${styles.item_short_rest}`}></span>
        <span className={`${styles.item} ${styles.item_work}`}></span>
        <span className={`${styles.item} ${styles.item_long_rest}`}></span>
      </div>
    </div>
  );
}
