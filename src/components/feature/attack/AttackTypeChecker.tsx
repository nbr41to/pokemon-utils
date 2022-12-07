import type { FC } from 'react';

import { useRecoilState } from 'recoil';

import { types } from 'src/data/compatibilities';
import { attackCheckAtom } from 'src/store/atom';

import { TypeLabel } from '../../TypeLabel';
import { TypeSelect } from '../../TypeSelect';

export const AttackTypeChecker: FC = () => {
  const [select, setSelect] = useRecoilState(attackCheckAtom);

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
          <div className="absolute bottom-2 w-full px-4">
            <button
              type="button"
              className="w-full rounded-md bg-gray-400 py-3 text-white shadow"
              onClick={() => setSelect(undefined)}
            >
              戻る
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
