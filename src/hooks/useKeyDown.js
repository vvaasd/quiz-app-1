import { useEffect } from 'react';

export const useKeyDown = (
  targetKey,
  action,
  options = { isForced: false }
) => {
  useEffect(() => {
    const onKeyDown = (event) => {
      setTimeout(() => {
        const activeElement = document.activeElement;
        const isSomethingActive =
          activeElement && activeElement.tagName.toLowerCase() !== 'body';
        const isThatKey = event.code === targetKey;

        if (!isThatKey || (isSomethingActive && !options.isForced)) {
          return;
        }

        event.preventDefault();
        action();
      }, 0);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
    //eslint-disable-next-line
  }, [targetKey, action]);
};
