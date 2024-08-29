import styles from './Footer.module.css';

export const Footer = () => (
  <footer className={styles['footer']}>
    <p className={styles['info']}>
      Проект выполнен в рамках стажировки&nbsp;
      <a
        href="https://preax.ru"
        target="_blank"
        className={styles['info-link']}
      >
        PREAX
      </a>
    </p>
  </footer>
);

Footer.displayName = 'Footer';
