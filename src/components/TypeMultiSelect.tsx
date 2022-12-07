import type { FC } from 'react';
import type { Elemental } from 'src/types';

import clsx from 'clsx';
import { useMemo } from 'react';

import { elementals, types } from 'src/data/compatibilities';

type Props = {
  value: Elemental[];
  onSelect: (el: Elemental) => void;
  onSelectAll?: () => void;
  onClear?: () => void;
};

export const TypeMultiSelect: FC<Props> = ({
  value,
  onSelect,
  onSelectAll,
  onClear,
}) => {
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
          onClick={() => onSelect(el)}
        >
          {types[el].label}
        </button>
      ))}
      {onSelectAll ? (
        <button
          type="button"
          className="w-20 rounded-full bg-teal-500 text-sm font-bold text-white disabled:opacity-20"
          disabled={value.length === elementals.length}
          onClick={onSelectAll}
        >
          全て
        </button>
      ) : (
        <div className="w-20 text-white" />
      )}

      {onClear ? (
        <button
          type="button"
          className="w-20 rounded-full bg-gray-700 text-sm font-bold text-white disabled:opacity-20"
          disabled={!value.length}
          onClick={onClear}
        >
          クリア
        </button>
      ) : (
        <div className="w-20 text-white" />
      )}
    </div>
  );
};
