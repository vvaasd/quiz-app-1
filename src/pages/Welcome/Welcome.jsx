import welcomeImg from '@/assets/img/welcome-img.svg';
import QUIZ_QUESTIONS_DATA from '@/data/quiz_questions.json';
import { PAGES, MAX_QUESTIONS_COUNT } from '@/constants';
import { generateQuizFrom } from '@/utils';
import { Button, Counter } from '@/components';
import { PageContext } from '@/context/PageContext';
import { useContext, useRef, useState } from 'react';
import { useKeyDown } from '@/hooks';
import styles from './Welcome.module.css';

export const Welcome = () => {
  const {
    setPage,
    fakeLoad,
    isLoading,
    setQuestionsForQuiz,
    setQuestionsCount,
  } = useContext(PageContext);
  const [counterValue, setCounterValue] = useState(1);
  const btnRef = useRef(null);

  const startQuiz = () => {
    fakeLoad(() => {
      const generatedQuiz = generateQuizFrom(QUIZ_QUESTIONS_DATA, counterValue);

      setQuestionsForQuiz(generatedQuiz);
      setQuestionsCount(generatedQuiz.length);
      setPage(PAGES.questions);
    });
  };

  useKeyDown('Enter', () => {
    btnRef.current.click();
  });

  return (
    <>
      <div className={styles['header']}>
        <h2 className={styles['title']}>Добро пожаловать</h2>
        <p className={styles['description']}>
          на викторину по странам
          <br />и столицам!
        </p>
      </div>
      <Counter
        max={MAX_QUESTIONS_COUNT}
        value={counterValue}
        onChange={setCounterValue}
        isDisabled={isLoading}
      />
      <Button
        ref={btnRef}
        onClick={startQuiz}
        isDisabled={!counterValue}
        isLoading={isLoading}
      >
        Начать
      </Button>
      <img src={welcomeImg} alt="welcome" className={styles['img']} />
    </>
  );
};
