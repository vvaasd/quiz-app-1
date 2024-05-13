import pages from '@/constants/pages';

import Question from '@/components/UI/Question/Question';
import Answer from '@/components/UI/Answer/Answer';
import Button from '@/components/UI/Button/Button';
import styles from './Questions.module.css';

import { useContext, useRef, useState } from 'react';
import { PageContext } from '@/context/context';
import useKeyDown from '@/hooks/useKeyDown';

export const Questions = ({
  onSuccesAnswer,
  questions,
  questionsCount,
  fakeLoad,
  isPageLoading,
}) => {
  const { setPage } = useContext(PageContext);

  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const answersRefs = Array.from({ length: 4 }, () => useRef(null));
  const btnRef = useRef(null);

  let btnContent = 'Ответить';
  if (isAnswered) {
    questionsCount === currentQuestionIndex + 1 // is last question?
      ? (btnContent = 'Результат')
      : (btnContent = 'Дальше');
  }

  function onAnswer() {
    if (selectedAnswer === questions[currentQuestionIndex].correctAnswer) {
      onSuccesAnswer();
    }

    fakeLoad(() => {
      setIsAnswered(true);
    });
  }

  function toNextQuestion() {
    if (currentQuestionIndex + 1 >= questionsCount) {
      fakeLoad(() => {
        setPage(pages.result);
      });
      return;
    }
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setSelectedAnswer(null);
    setIsAnswered(false);
  }

  useKeyDown('Enter', () => {
    btnRef.current.click();
  });

  useKeyDown('1', () => {
    answersRefs[0].current.click();
  });

  useKeyDown('2', () => {
    answersRefs[1].current.click();
  });

  useKeyDown('3', () => {
    answersRefs[2].current.click();
  });

  useKeyDown('4', () => {
    answersRefs[3].current.click();
  });

  useKeyDown('Backspace', () => {
    if (!isAnswered && !isPageLoading) {
      setSelectedAnswer(null);
    }
  });

  return (
    <>
      <Question
        description={questions[currentQuestionIndex].question}
        questionImg={questions[currentQuestionIndex].flag}
      />

      <Answer
        answersRefs={answersRefs}
        answers={questions[currentQuestionIndex].answers}
        correctAnswer={questions[currentQuestionIndex]?.correctAnswer}
        onSelect={setSelectedAnswer}
        selectedAnswer={selectedAnswer}
        isAnswered={isAnswered}
        isDisabled={isAnswered || isPageLoading}
      />

      <div className={styles['button-and-count-wrapper']}>
        <Button
          ref={btnRef}
          isDisabled={!selectedAnswer}
          isLoading={isPageLoading}
          onClick={isAnswered ? toNextQuestion : onAnswer}
        >
          {btnContent}
        </Button>
        <div className={styles['count']}>
          <span>{`${currentQuestionIndex + 1} / ${questionsCount}`}</span>
        </div>
      </div>
    </>
  );
};
