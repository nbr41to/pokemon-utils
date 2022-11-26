import type { FC } from 'react';

import clsx from 'clsx';

type Props = {
  label: string;
  value: boolean;
  onClick: () => void;
};

export const AccordionButton: FC<Props> = ({ label, value, onClick }) => {
  return (
    <button className="flex items-center gap-1" type="button" onClick={onClick}>
      <span
        className={clsx(
          'w-4 text-lg transition-transform',
          value && 'rotate-90'
        )}
      >
        ▶
      </span>
      <h2 className="my-2 text-lg font-bold">{label}</h2>
    </button>
  );
};
