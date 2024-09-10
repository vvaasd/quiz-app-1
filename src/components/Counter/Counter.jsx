import { PlusSvg, MinusSvg } from '@/components';
import styles from './Counter.module.css';

export const Counter = (props) => {
  const { min = 1, max, onChange, value, isDisabled } = props;

  const handleInput = (inputValue) => {
    if (inputValue >= max) {
      onChange(max);
    } else if (inputValue === '') {
      onChange('');
    } else if (inputValue >= min) {
      onChange(+inputValue);
    }
  };

  return (
    <div>
      <p className={styles.title}>Выбери количество вопросов:</p>
      <div className={styles.counterWrapper}>
        <button
          onClick={() => handleInput(value - 1)}
          className={styles.btn}
          disabled={value <= 1 || isDisabled}
        >
          <MinusSvg className={styles.btnSvg} />
        </button>
        <input
          type="number"
          className={styles.input}
          onChange={(event) => handleInput(event.target.value)}
          onBlur={() => value === '' && handleInput(1)}
          value={value}
          disabled={isDisabled}
        />
        <button
          onClick={() => handleInput(value + 1)}
          className={styles.btn}
          disabled={value >= max || isDisabled}
        >
          <PlusSvg className={styles.btnSvg} />
        </button>
      </div>
    </div>
  );
};
