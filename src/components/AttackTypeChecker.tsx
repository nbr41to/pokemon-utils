import type { FC } from 'react';
import type { Elemental } from 'src/utils';

import { useState } from 'react';

import { types } from 'src/utils';

import { TypeLabel } from './TypeLabel';
import { TypeSelect } from './TypeSelect';

export const AttackTypeChecker: FC = () => {
  const [select, setSelect] = useState<Elemental>();

  return (
    <div className="relative">
      {!select ? (
        <TypeSelect value={select} setValue={setSelect} />
      ) : (
        <div className="h-[252px]">
          <div className="space-y-4 px-4">
            <p>
              <TypeLabel
                label={types[select].label}
                color={types[select].color}
              />{' '}
              で攻撃
            </p>

            <p className="flex items-center gap-2">
              <span className="font-bold text-red-600">×2.0</span>
              <div className="flex flex-wrap gap-1">
                {types[select].attack.double.map((type) => (
                  <TypeLabel
                    key={`${type}-attack`}
                    label={types[type].label}
                    color={types[type].color}
                  />
                ))}
              </div>
            </p>

            <p className="flex items-center gap-2">
              <span className="font-bold text-blue-700">×0.5</span>
              <div className="flex flex-wrap gap-1">
                {types[select].attack.half.map((type) => (
                  <TypeLabel
                    key={`${type}-attack`}
                    label={types[type].label}
                    color={types[type].color}
                  />
                ))}
              </div>
            </p>

            <p className="flex items-center gap-2">
              <span className="font-bold">×0.0</span>
              <div className="flex flex-wrap gap-1">
                {types[select].attack.none.map((type) => (
                  <TypeLabel
                    key={`${type}-attack`}
                    label={types[type].label}
                    color={types[type].color}
                  />
                ))}
              </div>
            </p>
          </div>

          <button
            type="button"
            className="absolute bottom-2 w-full rounded-md bg-gray-400 py-3 text-white shadow"
            onClick={() => setSelect(undefined)}
          >
            戻る
          </button>
        </div>
      )}
    </div>
  );
};
