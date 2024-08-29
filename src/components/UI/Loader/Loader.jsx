import { clsx } from '@/utils';
import { LoaderDotSvg } from '@/components';
import styles from './Loader.module.css';

export const Loader = ({ className = '' }) => {
  return (
    <div className={styles['loader']}>
      <span className={clsx(styles['dot-wrapper'], className)}>
        <LoaderDotSvg className={styles['dot']} />
      </span>
      <span className={clsx(styles['dot-wrapper'], className)}>
        <LoaderDotSvg className={styles['dot']} />
      </span>
      <span className={clsx(styles['dot-wrapper'], className)}>
        <LoaderDotSvg className={styles['dot']} />
      </span>
    </div>
  );
};
