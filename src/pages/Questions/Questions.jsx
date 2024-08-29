import { PAGES } from '@/constants';
import { Question, Answer, Button } from '@/components';
import { PageContext } from '@/context/PageContext';
import { useKeyDown } from '@/hooks';
import { useContext, useRef, useState } from 'react';
import styles from './Questions.module.css';

export const Questions = () => {
  const {
    setPage,
    isLoading,
    incrementSuccessAnswersCount,
    questionsForQuiz,
    fakeLoad,
  } = useContext(PageContext);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);

  const btnRef = useRef(null);
  const currentQuestion = questionsForQuiz[currentQuestionIndex];

  const questionsCount = questionsForQuiz.length;

  const nextQuestionIndex = currentQuestionIndex + 1;

  let btnContent = 'Ответить';
  if (isAnswered) {
    questionsCount === nextQuestionIndex // is last question?
      ? (btnContent = 'Результат')
      : (btnContent = 'Дальше');
  }

  const handleAnswer = () => {
    if (selectedAnswer === currentQuestion.correctAnswer) {
      incrementSuccessAnswersCount();
    }

    fakeLoad(() => {
      setIsAnswered(true);
    });
  };

  const toNextQuestion = () => {
    if (nextQuestionIndex >= questionsCount) {
      fakeLoad(() => {
        setPage(PAGES.result);
      });
      return;
    }
    setCurrentQuestionIndex(nextQuestionIndex);
    setSelectedAnswer(null);
    setIsAnswered(false);
  };

  useKeyDown('Enter', () => {
    btnRef.current.click();
  });

  useKeyDown('Backspace', () => {
    if (!isAnswered && !isLoading) {
      setSelectedAnswer(null);
    }
  });

  return (
    <>
      <Question
        description={currentQuestion.question}
        questionImg={currentQuestion.flag}
      />
      <Answer
        answers={currentQuestion.answers}
        correctAnswer={currentQuestion?.correctAnswer}
        onSelect={setSelectedAnswer}
        selectedAnswer={selectedAnswer}
        isAnswered={isAnswered}
        isDisabled={isAnswered || isLoading}
      />
      <div className={styles['button-and-count-wrapper']}>
        <Button
          ref={btnRef}
          isDisabled={!selectedAnswer}
          isLoading={isLoading}
          onClick={isAnswered ? toNextQuestion : handleAnswer}
        >
          {btnContent}
        </Button>
        <div className={styles['count']}>
          <span>{`${nextQuestionIndex} / ${questionsCount}`}</span>
        </div>
      </div>
    </>
  );
};
