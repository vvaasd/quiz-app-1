import styles from './Footer.module.css';

import { memo } from 'react';

const Footer = memo(() => {
  return (
    <footer className={styles['footer']}>
      <p className={styles['info']}>
        Проект&nbsp;
        <a
          href="https://github.com/vvaasd/quiz-app-1"
          target="_blank"
          className={styles['info-link']}
        >
          QuizApp (1)
        </a>
      </p>
    </footer>
  );
});

export default Footer;
