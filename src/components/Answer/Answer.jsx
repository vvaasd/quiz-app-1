import { RadioButton } from '@/components';
import React, { useRef } from 'react';
import styles from './Answer.module.css';

export const Answer = (props) => {
  const {
    answers,
    onSelect,
    selectedAnswer,
    correctAnswer,
    isAnswered,
    isDisabled,
  } = props;
  const answersRefs = useRef(
    Array.from({ length: 4 }, () => React.createRef())
  );
  const currentAnswersRefs = answersRefs.current;

  return (
    <ul className={styles.list}>
      {answers.map((answer, index) => (
        <li key={`${index}_${answer}`}>
          <RadioButton
            ref={currentAnswersRefs[index]}
            keyCode={`Digit${index + 1}`}
            answerIndex={index + 1}
            answerText={answer}
            onSelect={onSelect}
            isAnswered={isAnswered}
            isDisabled={isDisabled}
            isChecked={answer === selectedAnswer}
            isCorrect={answer === correctAnswer}
          />
        </li>
      ))}
    </ul>
  );
};
