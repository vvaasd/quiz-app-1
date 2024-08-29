import styles from './Footer.module.css';

import { memo } from 'react';

export const Footer = memo(() => {
  return (
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
});

Footer.displayName = 'Footer';
