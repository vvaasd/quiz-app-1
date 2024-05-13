import { useEffect } from 'react';

export default function useKeyDown(targetKey, action) {
  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === targetKey) {
        action();
      }
    }
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [targetKey, action]);
}
