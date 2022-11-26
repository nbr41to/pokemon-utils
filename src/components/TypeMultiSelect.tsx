import type { FC } from 'react';
import type { Elemental } from 'src/utils';

import clsx from 'clsx';
import { useMemo } from 'react';

import { elementals, types } from 'src/utils';

type Props = {
  value: Elemental[];
  setValue: (value: Elemental[]) => void;
};

export const TypeMultiSelect: FC<Props> = ({ value, setValue }) => {
  const isSelected = useMemo(() => value.length >= 1, [value]);

  return (
    <div className="gap flex flex-wrap justify-center gap-2">
      {elementals.map((el) => (
        <button
          key={`${el}-defense`}
          type="button"
          className={clsx(
            'w-20 rounded-md px-1 py-3 text-sm font-bold text-white',
            types[el].color,
            !value.includes(el) && isSelected && 'opacity-30 saturate-50'
          )}
          onClick={() => {
            if (value.includes(el)) {
              setValue(value.filter((d) => d !== el));
            } else {
              if (value.length >= 2) return;
              setValue([...value, el]);
            }
          }}
        >
          {types[el].label}
        </button>
      ))}
      <div className="w-20 text-white" />
      <div className="w-20 text-white" />
    </div>
  );
};
