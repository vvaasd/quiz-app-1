import Loader from '@/components/UI/Loader/Loader';
import styles from './Button.module.css';

import { forwardRef } from 'react';

const Button = forwardRef(
  ({ children, isDisabled = false, isLoading = false, onClick }, ref) => {
    const btnContent = isLoading ? <Loader /> : children;

    return (
      <div className={styles['wrapper']}>
        <button
          ref={ref}
          className={styles['button']}
          disabled={isDisabled || isLoading}
          onClick={onClick}
        >
          {btnContent}
        </button>
        <p className={styles['description']}>
          или нажми <strong>Enter &crarr;</strong>
        </p>
      </div>
    );
  }
);

export default Button;
