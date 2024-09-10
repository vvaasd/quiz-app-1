import { PAGES } from '@/constants';
import { Question, Answer, Button } from '@/components';
import { PageContext } from '@/context/PageContext';
import { useKeyDown } from '@/hooks';
import { useContext, useState } from 'react';
import styles from './Questions.module.css';

const BUTTON_TEXT = {
  notAnswered: 'Ответить',
  next: 'Дальше',
  result: 'Результат',
};

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

  const currentQuestion = questionsForQuiz[currentQuestionIndex];
  const questionsCount = questionsForQuiz.length;
  const nextQuestionIndex = currentQuestionIndex + 1;
  const isBtnDisabled = !selectedAnswer || isLoading;

  let btnContent = BUTTON_TEXT.notAnswered;
  if (isAnswered) {
    questionsCount === nextQuestionIndex // is last question?
      ? (btnContent = BUTTON_TEXT.result)
      : (btnContent = BUTTON_TEXT.next);
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

  const handleBtnClick = () => {
    isAnswered ? toNextQuestion() : handleAnswer();
  };

  useKeyDown('Enter', () => {
    if (!isBtnDisabled) {
      handleBtnClick();
    }
  });

  useKeyDown('Backspace', () => {
    if (!isBtnDisabled && !isAnswered) {
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
        correctAnswer={currentQuestion.correctAnswer}
        onSelect={setSelectedAnswer}
        selectedAnswer={selectedAnswer}
        isAnswered={isAnswered}
        isDisabled={isAnswered || isLoading}
      />
      <div className={styles.buttonAndCount}>
        <div className={styles.btnWrapper}>
          <Button
            isDisabled={isBtnDisabled}
            isLoading={isLoading}
            onClick={handleBtnClick}
            withTip
          >
            {btnContent}
          </Button>
        </div>
        <div className={styles.count}>
          {`${nextQuestionIndex} / ${questionsCount}`}
        </div>
      </div>
    </>
  );
};
