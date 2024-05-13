import clsx from '@/utils/clsx';

import styles from './Paragraph.module.css';

function Paragraph({ className, children }) {
  return <p className={clsx(styles['paragraph'], className)}>{children}</p>;
}

export default Paragraph;
