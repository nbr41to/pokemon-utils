import type { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  close: () => void;
};

export const Modal: FC<Props> = ({ children, close }) => {
  return (
    <div className="">
      <div className="fixed top-1/2 left-1/2 z-50 min-h-[200px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white py-4 px-6">
        {children}
      </div>
      {/* Overlay */}
      {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
      <div
        className="fixed top-0 left-0 z-40 flex h-full w-full items-center justify-center bg-black bg-opacity-50"
        role="button"
        tabIndex={0}
        onClick={close}
        onKeyDown={close}
      />
    </div>
  );
};
