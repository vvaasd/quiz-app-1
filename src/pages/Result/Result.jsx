import { getEndingByNumber } from '@/utils';
import { Button } from '@/components/UI/Button/Button';
import { PageContext } from '@/context/PageContext';
import { useKeyDown } from '@/hooks';
import { useContext, useRef } from 'react';
import styles from './Result.module.css';

export const Result = () => {
  const { resetQuiz, questionsCount, successAnswersCount } =
    useContext(PageContext);
  const btnRef = useRef(null);
  const errorAnswersCount = questionsCount - successAnswersCount;
  const questionWord = getEndingByNumber(
    successAnswersCount,
    'вопросов',
    'вопрос',
    'вопроса'
  );
  const errorWord = getEndingByNumber(
    errorAnswersCount,
    'ошибок',
    'ошибку',
    'ошибки'
  );

  let resultText;
  if (successAnswersCount === questionsCount) {
    resultText = (
      <>
        Ты ответил правильно
        <br />
        на все вопросы. Так держать!
      </>
    );
  } else if (successAnswersCount === 0) {
    resultText = (
      <>
        Ты не ответил ни на один вопрос.
        <br />
        Попробуй еще!
      </>
    );
  } else {
    resultText = (
      <>
        Ты ответил правильно
        <br />
        на <span className={styles.success}>{successAnswersCount}</span>&nbsp;
        {questionWord} и сделал&nbsp;
        <span className={styles.error}>{errorAnswersCount}</span>&nbsp;
        {errorWord}.
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
        <h2 className={styles['title']}>Результат</h2>
        <p className={styles['description']}>{resultText}</p>
      </div>
      <Button ref={btnRef} onClick={resetQuiz}>
        Попробовать еще
      </Button>
    </>
  );
};
