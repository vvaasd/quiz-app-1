import welcomeImg from '@/assets/img/welcome-img.svg';
import QUIZ_QUESTIONS_DATA from '@/data/quiz_questions.json';
import { PAGES, MAX_QUESTIONS_COUNT } from '@/constants';
import { generateQuizFrom } from '@/utils';
import { Button, Counter } from '@/components';
import { PageContext } from '@/context/PageContext';
import { useContext, useState } from 'react';
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

  const isBtnDisabled = !counterValue || isLoading;

  const startQuiz = () => {
    fakeLoad(() => {
      const generatedQuiz = generateQuizFrom(QUIZ_QUESTIONS_DATA, counterValue);
      console.log(generatedQuiz);
      setQuestionsForQuiz(generatedQuiz);
      setQuestionsCount(generatedQuiz.length);
      setPage(PAGES.questions);
    });
  };

  useKeyDown('Enter', () => {
    if (!isBtnDisabled) {
      startQuiz();
    }
  });

  return (
    <>
      <div className={styles.header}>
        <h2 className={styles.title}>Добро пожаловать</h2>
        <p className={styles.description}>
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
      <div className={styles.btnWrapper}>
        <Button
          onClick={startQuiz}
          isDisabled={isBtnDisabled}
          isLoading={isLoading}
          withTip
        >
          Начать
        </Button>
      </div>
      <img src={welcomeImg} alt="welcome" className={styles.img} />
    </>
  );
};
