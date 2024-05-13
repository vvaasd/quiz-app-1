import getEndingByNumber from '@/utils/getEndingByNumber';

import Title from '@/components/UI/Title/Title';
import Paragraph from '@/components/UI/Paragraph/Paragraph';
import Button from '@/components/UI/Button/Button';
import styles from './Result.module.css';

import { useContext, useRef } from 'react';
import { PageContext } from '@/context/context';
import useKeyDown from '@/hooks/useKeyDown';

export const Result = ({ successAnswersCount, maxAnswersCount }) => {
  const { resetQuiz } = useContext(PageContext);
  const btnRef = useRef(null);
  let errorAnswers = maxAnswersCount - successAnswersCount;

  let questionWordEnding = getEndingByNumber(
    successAnswersCount,
    'ов',
    '',
    'а'
  );
  let errorWordEnding = getEndingByNumber(errorAnswers, 'ок', 'ку', 'ки');

  let resultDescription;
  if (successAnswersCount === maxAnswersCount) {
    resultDescription = (
      <>
        Ты ответил правильно
        <br />
        на все вопросы. Так держать!
      </>
    );
  } else if (successAnswersCount === 0) {
    resultDescription = (
      <>
        Ты не ответил ни на один вопрос.
        <br />
        Попробуй еще!
      </>
    );
  } else {
    resultDescription = (
      <>
        Ты ответил правильно
        <br />
        на <span className={styles.success}>{successAnswersCount}</span> вопрос
        {questionWordEnding} и сделал{' '}
        <span className={styles.error}>{errorAnswers}</span> ошиб
        {errorWordEnding}.
      </>
    );
  }

  useKeyDown('Enter', () => {
    btnRef.current.click();
  });

  return (
    <>
      <div className={styles['img']}></div>
      <div className={styles['header']}>
        <Title className={styles['title']}>Результат</Title>
        <Paragraph className={styles['description']}>
          {resultDescription}
        </Paragraph>
      </div>
      <Button ref={btnRef} onClick={resetQuiz}>
        Попробовать еще
      </Button>
    </>
  );
};
