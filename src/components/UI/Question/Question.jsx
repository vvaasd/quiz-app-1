import { memo } from 'react';
import styles from './Question.module.css';

export const Question = memo(({ description, questionImg }) => {
  return (
    <figure className={styles['question']}>
      <img src={questionImg} alt="flag" className={styles['flag']} />
      <figcaption>
        <p className={styles['description']}>{description}</p>
      </figcaption>
    </figure>
  );
});

Question.displayName = 'Question';
