import clsx from '@/utils/clsx';

import LoaderDot from '@/components/Svg/LoaderDot';
import styles from './Loader.module.css';

function Loader({ className = '' }) {
  return (
    <>
      <div className={styles['loader']}>
        <span className={clsx(styles['dot-wrapper'], className)}>
          <LoaderDot className={styles['dot']} />
        </span>
        <span className={clsx(styles['dot-wrapper'], className)}>
          <LoaderDot className={styles['dot']} />
        </span>
        <span className={clsx(styles['dot-wrapper'], className)}>
          <LoaderDot className={styles['dot']} />
        </span>
      </div>
    </>
  );
}

export default Loader;
