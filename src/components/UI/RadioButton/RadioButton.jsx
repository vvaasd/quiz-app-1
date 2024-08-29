import { clsx } from '@/utils';
import { ErrorSvg, SuccessSvg } from '@/components';
import styles from './RadioButton.module.css';

import { forwardRef } from 'react';

export const RadioButton = forwardRef(
  (
    {
      answerIndex,
      answerText,
      onSelect,
      isChecked,
      isAnswered,
      isDisabled,
      isCorrect,
    },
    ref
  ) => {
    let labelClass = '';
    if (isAnswered) {
      if (isCorrect) {
        labelClass = styles['success'];
      } else if (isChecked) {
        labelClass = styles['error'];
      }
    }

    return (
      <>
        <input
          ref={ref}
          type="radio"
          id={answerIndex}
          name={'answer'}
          value={answerText}
          className={styles['radio-input']}
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
        <label
          htmlFor={answerIndex}
          className={clsx(styles['label'], labelClass)}
        >
          <p className={styles['label-index']}>{answerIndex}</p>
          <p className={styles['label-text']}>{answerText}</p>
          {isAnswered && (
            <div className={styles['result-icon']}>
              {isCorrect ? <SuccessSvg /> : <ErrorSvg />}
            </div>
          )}
        </label>
      </>
    );
  }
);

RadioButton.displayName = 'RadioButton';
