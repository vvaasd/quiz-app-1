import RadioButton from '@/components/UI/Answer/RadioButton/RadioButton';
import styles from './Answer.module.css';

const Answers = ({
  answersRefs,
  answers,
  onSelect,
  selectedAnswer,
  correctAnswer,
  isAnswered,
  isDisabled,
}) => {
  const radioButtons = answers.map((answer, index) => (
    <RadioButton
      ref={answersRefs[index]}
      key={index}
      answerIndex={index + 1}
      answerText={answer}
      onSelect={onSelect}
      isAnswered={isAnswered}
      isDisabled={isDisabled}
      isChecked={answer === selectedAnswer}
      isCorrect={answer === correctAnswer}
    />
  ));

  return <div className={styles['answers-wrapper']}>{radioButtons}</div>;
};

export default Answers;
