import { RadioButton } from '@/components';
import { useKeyDown } from '@/hooks';
import React, { useRef } from 'react';
import styles from './Answer.module.css';

export const Answer = ({
  answers,
  onSelect,
  selectedAnswer,
  correctAnswer,
  isAnswered,
  isDisabled,
}) => {
  const answersRefs = useRef(
    Array.from({ length: 4 }, () => React.createRef())
  );
  const currentAnswersRefs = answersRefs.current;

  useKeyDown('1', () => {
    currentAnswersRefs[0].current.click();
  });

  useKeyDown('2', () => {
    currentAnswersRefs[1].current.click();
  });

  useKeyDown('3', () => {
    currentAnswersRefs[2].current.click();
  });

  useKeyDown('4', () => {
    currentAnswersRefs[3].current.click();
  });

  return (
    <div className={styles['answers-wrapper']}>
      {answers.map((answer, index) => (
        <RadioButton
          key={index}
          ref={currentAnswersRefs[index]}
          answerIndex={index + 1}
          answerText={answer}
          onSelect={onSelect}
          isAnswered={isAnswered}
          isDisabled={isDisabled}
          isChecked={answer === selectedAnswer}
          isCorrect={answer === correctAnswer}
        />
      ))}
    </div>
  );
};
