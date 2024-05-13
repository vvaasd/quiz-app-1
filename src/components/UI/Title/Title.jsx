import clsx from '@/utils/clsx';

import styles from './Title.module.css';

function Title({ children, className }) {
  return <h2 className={clsx(styles['title'], className)}>{children}</h2>;
}

export default Title;
