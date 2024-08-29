import { PlusSvg, MinusSvg } from '@/components';
import styles from './Counter.module.css';

export const Counter = ({ max, onChange, value, isDisabled }) => {
  const handleInput = (inputValue) => {
    if (inputValue >= max) {
      onChange(max);
    } else if (inputValue === '') {
      onChange('');
    } else if (inputValue >= 1) {
      onChange(+inputValue);
    }
  };

  return (
    <div>
      <p className={styles['paragraph']}>Выбери количество вопросов:</p>
      <div className={styles['counter-wrapper']}>
        <button
          onMouseDown={() => handleInput(value - 1)}
          className={styles['btn']}
          disabled={value <= 1 || isDisabled}
        >
          <MinusSvg className={styles['btn-svg']} />
        </button>
        <input
          type="number"
          className={styles['input']}
          onChange={(event) => handleInput(event.target.value)}
          onBlur={() => value === '' && handleInput(1)}
          value={value}
          disabled={isDisabled}
        />
        <button
          onMouseDown={() => handleInput(value + 1)}
          className={styles['btn']}
          disabled={value >= max || isDisabled}
        >
          <PlusSvg className={styles['btn-svg']} />
        </button>
      </div>
    </div>
  );
};
