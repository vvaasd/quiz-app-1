import Logo from '@/components/UI/Logo/Logo';
import CloseSvg from '@/components/Svg/CloseSvg';

import styles from './Header.module.css';

function Header({ hasCloseBtn = false, onReset }) {
  return (
    <header className={styles.header}>
      <Logo className={styles['logo']} />
      {hasCloseBtn && (
        <button className={styles['close-btn']} type="button" onClick={onReset}>
          <CloseSvg className={styles['close-svg']} />
        </button>
      )}
    </header>
  );
}

export default Header;
