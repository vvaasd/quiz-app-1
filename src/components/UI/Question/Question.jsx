import Paragraph from '@/components/UI/Paragraph/Paragraph';
import styles from './Question.module.css';

import { memo } from 'react';

const Question = memo(({ description, questionImg }) => {
  return (
    <figure className={styles['question']}>
      <img src={questionImg} alt="flag" className={styles['flag']} />
      <figcaption>
        <Paragraph className={styles['description']}>{description}</Paragraph>
      </figcaption>
    </figure>
  );
});

export default Question;
