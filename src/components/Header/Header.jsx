import { CloseSvg, Logo } from '@/components';
import styles from './Header.module.css';

export const Header = (props) => {
  const { hasCloseBtn, onReset } = props;

  return (
    <header className={styles.header}>
      <Logo className={styles.logo} />
      {hasCloseBtn && (
        <button className={styles.closeBtn} type="button" onClick={onReset}>
          <CloseSvg className={styles.closeSvg} />
        </button>
      )}
    </header>
  );
};
