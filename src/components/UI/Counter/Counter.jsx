import Paragraph from '@/components/UI/Paragraph/Paragraph';
import styles from './Counter.module.css';

import PlusSvg from '@/components/Svg/PlusSvg';
import MinusSvg from '@/components/Svg/MinusSvg';

function Counter({ max, value, dispatch, isDisabled }) {
  function inputHandler(inputValue) {
    if (inputValue >= max) {
      dispatch({ type: 'set', value: max });
      return;
    } else if (inputValue === '') {
      dispatch({ type: 'set', value: '' });
      return;
    } else if (inputValue < 1) {
      return;
    } else {
      dispatch({ type: 'set', value: +inputValue });
    }
  }

  return (
    <div>
      <Paragraph className={styles['paragraph']}>
        Выбери количество вопросов:
      </Paragraph>
      <div className={styles['counter-wrapper']}>
        <button
          onMouseDown={() => dispatch({ type: 'decrement' })}
          className={styles['btn']}
          disabled={value <= 1 || isDisabled}
        >
          <MinusSvg className={styles['btn-svg']} />
        </button>
        <input
          name="counter"
          type="number"
          className={styles['input']}
          onChange={(event) => inputHandler(event.target.value)}
          onBlur={() => value === '' && inputHandler(1)}
          value={value}
          disabled={isDisabled}
        />
        <button
          onMouseDown={() => dispatch({ type: 'increment' })}
          className={styles['btn']}
          disabled={value >= max || isDisabled}
        >
          <PlusSvg className={styles['btn-svg']} />
        </button>
      </div>
    </div>
  );
}

export default Counter;
