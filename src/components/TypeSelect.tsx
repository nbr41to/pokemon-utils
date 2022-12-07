import type { FC } from 'react';
import type { Elemental } from 'src/types';

import clsx from 'clsx';

import { elementals, types } from 'src/data/compatibilities';

type Props = {
  value: Elemental | undefined;
  setValue: (value: Elemental) => void;
};

export const TypeSelect: FC<Props> = ({ value, setValue }) => {
  return (
    <div className="gap flex flex-wrap justify-center gap-2">
      {elementals.map((el) => (
        <button
          key={`${el}-attack`}
          type="button"
          className={clsx(
            'w-20 rounded-md px-1 py-3 text-sm font-bold text-white',
            'active:brightness-60',
            types[el].color,
            value === el && 'brightness-60'
          )}
          onClick={() => setValue(el)}
        >
          {types[el].label}
        </button>
      ))}
      <div className="w-20 text-white" />
      <div className="w-20 text-white" />
    </div>
  );
};
