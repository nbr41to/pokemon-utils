import { useRef } from 'react';

export const useAutoFocus = <RefType extends HTMLElement>() => {
  const ref = useRef<RefType>(null);
  const triggerAutoFocus = (timeout = 100) => {
    if (!ref.current) return;
    const empEl = document.createElement('input');
    empEl.style.position = 'absolute';
    empEl.style.top = `${ref.current.offsetTop + 7}px`;
    empEl.style.left = `${ref.current.offsetLeft}px`;
    empEl.style.height = '0';
    empEl.style.opacity = '0';
    document.body.appendChild(empEl);
    empEl.focus();

    setTimeout(() => {
      if (!ref.current) return;
      ref.current.focus();
      ref.current.click();
      document.body.removeChild(empEl);
    }, timeout);
  };

  return {
    ref,
    triggerAutoFocus,
  };
};
