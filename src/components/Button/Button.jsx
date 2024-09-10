import { Loader } from '@/components';
import { clsx } from '@/utils';
import styles from './Button.module.css';

export const Button = (props) => {
  const { className, isDisabled, isLoading, children, onClick, withTip } =
    props;

  return (
    <>
      <button
        className={clsx(styles.button, className)}
        disabled={isDisabled || isLoading}
        onClick={onClick}
      >
        {isLoading ? <Loader /> : children}
      </button>
      {withTip && (
        <p className={styles.tip}>
          или нажми <strong>Enter &crarr;</strong>
        </p>
      )}
    </>
  );
};
