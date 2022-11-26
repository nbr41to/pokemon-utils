import type { FC } from 'react';

import clsx from 'clsx';

type Props = {
  label: string;
  color: string;
};

export const TypeLabel: FC<Props> = ({ label, color }) => {
  return (
    <span
      className={clsx(
        'whitespace-nowrap rounded py-1 px-2 text-xs text-white',
        color
      )}
    >
      {label}
    </span>
  );
};
