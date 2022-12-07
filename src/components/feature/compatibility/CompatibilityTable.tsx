import type { FC } from 'react';
import type { Elemental } from 'src/types';

import clsx from 'clsx';

import { generateCompatibilityTable } from '@/utils/generateCompatibilityTable';

import { elementals, types } from 'src/data/compatibilities';

type Props = {
  selects: Elemental[];
};

export const CompatibilityTable: FC<Props> = ({ selects }) => {
  return (
    <div className="relative w-[354px] border-t border-l border-r text-xs">
      <div className="h-16" />
      <div className="absolute flex origin-top-left -rotate-90 flex-col border-l">
        <div className="h-16 w-16" />
        {elementals.map((el) => (
          <div key={el} className="h-4 w-16 border-t">
            {types[el].label}
          </div>
        ))}
      </div>

      {selects.map((el, idx) => (
        <div key={`${el}-row`}>
          <div className={clsx('flex', idx % 2 === 0 && 'bg-slate-100')}>
            <div className="w-16">{types[el].label}</div>
            {generateCompatibilityTable(el).map((row, i) => (
              <div
                // eslint-disable-next-line react/no-array-index-key
                key={`${el}-${i}`}
                className="flex h-4 w-4 items-center justify-center border-l text-xs"
              >
                {row}
              </div>
            ))}
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
};
