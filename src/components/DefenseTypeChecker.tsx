import type { FC } from 'react';
import type { Elemental } from 'src/utils';

import { useMemo, useState } from 'react';

import { getResult2TypeDefense, types } from 'src/utils';

import { TypeLabel } from './TypeLabel';
import { TypeMultiSelect } from './TypeMultiSelect';

export const DefenseTypeChecker: FC = () => {
  const [selects, setSelects] = useState<Elemental[]>([]);
  const isSelected = useMemo(() => selects.length >= 1, [selects]);
  const result2TypeDefense = useMemo(
    () => getResult2TypeDefense(selects[0], selects[1]),
    [selects]
  );

  return (
    <div>
      <TypeMultiSelect value={selects} setValue={setSelects} />
      {isSelected && (
        <div className="mt-4 space-y-2">
          <div className="space-y-4 p-4">
            {result2TypeDefense && 'quadruple' in result2TypeDefense && (
              <p className="flex items-center gap-2">
                <span className="font-bold text-amber-500">×4.00</span>
                <div className="flex flex-wrap gap-1">
                  {result2TypeDefense.quadruple.map((type) => (
                    <TypeLabel
                      key={`${type}-defense`}
                      label={types[type].label}
                      color={types[type].color}
                    />
                  ))}
                </div>
              </p>
            )}

            <p className="flex items-center gap-2">
              <span className="font-bold text-red-600">×2.00</span>
              <div className="flex flex-wrap gap-1">
                {result2TypeDefense?.double.map((type) => (
                  <TypeLabel
                    key={`${type}-defense`}
                    label={types[type].label}
                    color={types[type].color}
                  />
                ))}
              </div>
            </p>

            <p className="flex items-center gap-2">
              <span className="font-bold text-blue-700">×0.50</span>
              <div className="flex flex-wrap gap-1">
                {result2TypeDefense?.half.map((type) => (
                  <TypeLabel
                    key={`${type}-defense`}
                    label={types[type].label}
                    color={types[type].color}
                  />
                ))}
              </div>
            </p>

            {result2TypeDefense && 'quarter' in result2TypeDefense && (
              <p className="flex items-center gap-2">
                <span className="font-bold text-violet-600">×0.25</span>
                <div className="flex flex-wrap gap-1">
                  {result2TypeDefense.quarter.map((type) => (
                    <TypeLabel
                      key={`${type}-defense`}
                      label={types[type].label}
                      color={types[type].color}
                    />
                  ))}
                </div>
              </p>
            )}

            <p className="flex items-center gap-2">
              <span className="font-bold">×0.00</span>
              <div className="flex flex-wrap gap-1">
                {result2TypeDefense?.none.map((type) => (
                  <TypeLabel
                    key={`${type}-defense`}
                    label={types[type].label}
                    color={types[type].color}
                  />
                ))}
              </div>
            </p>
          </div>

          <button
            type="button"
            className="w-full rounded-md bg-gray-400 py-3 text-white shadow"
            onClick={() => {
              setSelects([]);
            }}
          >
            戻る
          </button>
        </div>
      )}
    </div>
  );
};
