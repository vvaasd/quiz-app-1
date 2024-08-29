import { useEffect } from 'react';

export const useKeyDown = (targetKey, action) => {
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === targetKey) {
        action();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [targetKey, action]);
};
