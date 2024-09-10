import { clsx } from '@/utils';
import { LoaderDotSvg } from '@/components';
import styles from './Loader.module.css';

export const Loader = (props) => {
  const { className } = props;

  return (
    <div className={styles.loader}>
      <span className={clsx(styles.dot, className)}>
        <LoaderDotSvg className={styles.dotSvg} />
      </span>
      <span className={clsx(styles.dot, className)}>
        <LoaderDotSvg className={styles.dotSvg} />
      </span>
      <span className={clsx(styles.dot, className)}>
        <LoaderDotSvg className={styles.dotSvg} />
      </span>
    </div>
  );
};
