import { CloseSvg, Logo } from '@/components';
import { memo } from 'react';
import styles from './Header.module.css';

export const Header = memo(({ hasCloseBtn = false, onReset }) => (
  <header className={styles.header}>
    <Logo className={styles['logo']} />
    {hasCloseBtn && (
      <button className={styles['close-btn']} type="button" onClick={onReset}>
        <CloseSvg className={styles['close-svg']} />
      </button>
    )}
  </header>
));

Header.displayName = 'Header';
