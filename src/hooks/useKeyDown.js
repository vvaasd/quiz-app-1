import { useEffect } from 'react';

const INTERACTIVE_ELEMENTS_TAG_NAMES = [
  'BUTTON',
  'A',
  'TEXTAREA',
  'SELECT',
  // 'INPUT',
];

export const useKeyDown = (targetKey, action) => {
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.code === targetKey) {
        const activeElementTagName = document.activeElement.tagName;

        const isInteractiveElement =
          INTERACTIVE_ELEMENTS_TAG_NAMES.includes(activeElementTagName);

        if (isInteractiveElement) {
          return;
        }
        action();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
    //eslint-disable-next-line
  }, [targetKey, action]);
};
