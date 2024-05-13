import pages from '@/constants/pages';
import generateQuizFrom from '@/utils/generateQuizFrom';

import welcomeImg from '@/assets/welcome-img.svg';

import Paragraph from '@/components/UI/Paragraph/Paragraph';
import Title from '@/components/UI/Title/Title';
import Counter from '@/components/UI/Counter/Counter';
import Button from '@/components/UI/Button/Button';
import styles from './Welcome.module.css';

import { useContext, useReducer, useRef } from 'react';
import { PageContext } from '@/context/context';
import useKeyDown from '@/hooks/useKeyDown';

export const Welcome = ({
  setQuestionsForQuiz,
  maxQuestions,
  quizData,
  isPageLoading,
  fakeLoad,
}) => {
  const { setPage } = useContext(PageContext);
  const btnRef = useRef(null);

  function startQuiz() {
    fakeLoad(() => {
      setQuestionsForQuiz(generateQuizFrom(quizData, counterState.count));
      setPage(pages.questions);
    });
  }

  const [counterState, counterDispatch] = useReducer(counterReducer, {
    count: 1,
  });
  function counterReducer(state, action) {
    switch (action.type) {
      case 'set':
        return { ...state, count: action.value };
      case 'increment':
        return { ...state, count: state.count + 1 };
      case 'decrement':
        return { ...state, count: state.count - 1 };
      default:
        throw new Error();
    }
  }

  useKeyDown('Enter', () => {
    btnRef.current.click();
  });

  return (
    <>
      <div className={styles['header']}>
        <Title className={styles['title']}>Добро пожаловать</Title>
        <Paragraph className={styles['description']}>
          на викторину по странам
          <br />и столицам!
        </Paragraph>
      </div>
      <Counter
        max={maxQuestions}
        value={counterState.count}
        dispatch={counterDispatch}
        isDisabled={isPageLoading}
      />
      <Button
        ref={btnRef}
        onClick={startQuiz}
        isDisabled={!counterState.count}
        isLoading={isPageLoading}
      >
        Начать
      </Button>
      <img src={welcomeImg} alt="welcome" className={styles['img']} />
    </>
  );
};
