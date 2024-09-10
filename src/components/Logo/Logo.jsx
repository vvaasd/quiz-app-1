import { clsx } from '@/utils';
import { LogoSvg } from '@/components';
import styles from './Logo.module.css';

export const Logo = (props) => {
  const { className } = props;

  return (
    <a href="/" className={clsx(styles.link, className)}>
      <LogoSvg className={styles.logo} />
    </a>
  );
};
