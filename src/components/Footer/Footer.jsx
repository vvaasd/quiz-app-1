import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.text}>
        Проект выполнен в рамках стажировки&nbsp;
        <a
          className={styles.link}
          href="https://preax.ru"
          target="_blank"
          rel={'noreferrer'}
        >
          PREAX
        </a>
      </p>
    </footer>
  );
};
