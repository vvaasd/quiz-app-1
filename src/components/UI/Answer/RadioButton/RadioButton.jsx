import clsx from '@/utils/clsx';

import ErrorSvg from '@/components/Svg/ErrorSvg';
import SuccessSvg from '@/components/Svg/SuccessSvg';

import Paragraph from '@/components/UI/Paragraph/Paragraph';
import styles from './RadioButton.module.css';

import { forwardRef, memo } from 'react';

const RadioButton = memo(
  forwardRef(function (
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
  ) {
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
            isChecked && onSelect(null);
          }}
          checked={isChecked}
          disabled={isDisabled}
        />
        <label
          htmlFor={answerIndex}
          className={clsx(styles['label'], labelClass)}
        >
          <Paragraph className={styles['label-index']}>{answerIndex}</Paragraph>
          <Paragraph className={styles['label-text']}>{answerText}</Paragraph>
          {isAnswered && (
            <div className={styles['result-icon']}>
              {isCorrect && <SuccessSvg />}
              {!isCorrect && <ErrorSvg />}
            </div>
          )}
        </label>
      </>
    );
  })
);

export default RadioButton;
