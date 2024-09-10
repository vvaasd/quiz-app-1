import { clsx } from '@/utils';
import { ErrorSvg, SuccessSvg } from '@/components';
import { useKeyDown } from '@/hooks';
import { forwardRef } from 'react';
import styles from './RadioButton.module.css';

const BUTTON_TYPES = {
  success: 'success',
  error: 'error',
  unchecked: '',
};

export const RadioButton = forwardRef((props, ref) => {
  const {
    answerIndex,
    answerText,
    onSelect,
    isChecked,
    isAnswered,
    isDisabled,
    isCorrect,
    keyCode,
  } = props;
  const inputId = `answer_${answerIndex}`;

  let buttonType = BUTTON_TYPES.unchecked;
  if (isAnswered) {
    if (isCorrect) {
      buttonType = BUTTON_TYPES.success;
    } else if (isChecked) {
      buttonType = BUTTON_TYPES.error;
    }
  }

  useKeyDown(keyCode, () => {
    if (isDisabled) {
      return;
    }

    const value = isChecked ? null : answerText;

    onSelect(value);
  });

  const labelClass = styles[buttonType];

  return (
    <>
      <input
        ref={ref}
        type="radio"
        name="answer"
        id={inputId}
        value={answerText}
        className={styles.input}
        onChange={() => {
          onSelect(answerText);
        }}
        onClick={() => {
          if (isChecked) {
            onSelect(null);
          }
        }}
        checked={isChecked}
        disabled={isDisabled}
      />
      <label htmlFor={inputId} className={clsx(styles.label, labelClass)}>
        <p className={styles.prefix}>{answerIndex}</p>
        <p className={styles.text}>{answerText}</p>
        {isAnswered && (
          <>
            {buttonType === BUTTON_TYPES.success && (
              <SuccessSvg className={styles.icon} />
            )}
            {buttonType === BUTTON_TYPES.error && (
              <ErrorSvg className={styles.icon} />
            )}
          </>
        )}
      </label>
    </>
  );
});

RadioButton.displayName = 'RadioButton';
