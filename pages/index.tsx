import type { Elemental } from 'src/utils';

import clsx from 'clsx';
import { useState, useMemo } from 'react';

import { getResult2TypeDefense, elementals, types } from 'src/utils';

const Home = () => {
  const [attackSelect, setAttackSelect] = useState<Elemental>();
  const [defenseSelects, setDefenseSelects] = useState<Elemental[]>([]);
  const [decidedDefenseSelects, setDecidedDefenseSelects] = useState(false);
  const result2TypeDefense = useMemo(
    () => getResult2TypeDefense(defenseSelects[0], defenseSelects[1]),
    [defenseSelects]
  );

  return (
    <div className="mx-auto max-w-[400px] px-4">
      <h2 className="my-2 text-lg font-bold">攻撃する技のタイプ</h2>
      {!attackSelect ? (
        <div className="gap flex flex-wrap justify-center gap-2">
          {elementals.map((el) => (
            <button
              key={`${el}-attack`}
              type="button"
              className={clsx(
                'w-20 rounded-md px-1 py-3 text-sm font-bold text-white',
                'active:brightness-60',
                types[el].color,
                attackSelect === el && 'brightness-60'
              )}
              onClick={() => setAttackSelect(el)}
            >
              {types[el].label}
            </button>
          ))}
          <div className="w-20 text-white" />
          <div className="w-20 text-white" />
        </div>
      ) : (
        <div className="h-[292px] space-y-2">
          <div className="space-y-4">
            <p>{types[attackSelect].label}で攻撃</p>

            <p className="flex items-center gap-2">
              ×2.0
              <div className="flex flex-wrap gap-1">
                {types[attackSelect].attack.double.map((type) => (
                  <span
                    key={`${type}-attack`}
                    className={clsx(
                      'whitespace-nowrap rounded py-1 px-2 text-xs text-white',
                      types[type].color
                    )}
                  >
                    {types[type].label}
                  </span>
                ))}
              </div>
            </p>

            <p className="flex items-center gap-2">
              ×0.5
              {types[attackSelect].attack.half.map((type) => (
                <span
                  key={`${type}-attack`}
                  className={clsx(
                    'whitespace-nowrap rounded py-1 px-2 text-xs text-white',
                    types[type].color
                  )}
                >
                  {types[type].label}
                </span>
              ))}
            </p>

            <p className="flex items-center gap-2">
              ×0.0
              {types[attackSelect].attack.none.map((type) => (
                <span
                  key={`${type}-attack`}
                  className={clsx(
                    'whitespace-nowrap rounded py-1 px-2 text-xs text-white',
                    types[type].color
                  )}
                >
                  {types[type].label}
                </span>
              ))}
            </p>

            <button
              type="button"
              className="w-full rounded-md bg-gray-400 py-3 text-white shadow"
              onClick={() => setAttackSelect(undefined)}
            >
              戻る
            </button>
          </div>
        </div>
      )}

      <h2 className="mt-6 mb-2 text-lg font-bold">受けるポケモンのタイプ</h2>
      {!decidedDefenseSelects ? (
        <div className="gap flex flex-wrap justify-center gap-2">
          {elementals.map((el) => (
            <button
              key={`${el}-defense`}
              type="button"
              className={clsx(
                'w-20 rounded-md px-1 py-3 text-sm font-bold text-white',
                types[el].color,
                defenseSelects.includes(el) &&
                  'scale-90 opacity-70 outline outline-rose-600'
              )}
              onClick={() => {
                if (defenseSelects.includes(el)) {
                  setDefenseSelects(defenseSelects.filter((d) => d !== el));
                } else {
                  if (defenseSelects.length >= 2) return;
                  setDefenseSelects([...defenseSelects, el]);
                }
              }}
            >
              {types[el].label}
            </button>
          ))}
          <div className="w-20 text-white" />
          <button
            type="button"
            className="w-20 rounded-full bg-gray-400 px-1 py-4 text-sm font-bold text-white outline outline-gray-600 disabled:opacity-50 disabled:outline-none"
            disabled={!defenseSelects.length}
            onClick={() => setDecidedDefenseSelects(true)}
          >
            決定
          </button>
        </div>
      ) : (
        <div className="space-y-2">
          <div className="space-y-4">
            <p>
              {defenseSelects.map((type) => (
                <span
                  key={`${type}-defense-selects`}
                  className={clsx(
                    'whitespace-nowrap rounded py-1 px-2 text-xs text-white',
                    types[type].color
                  )}
                >
                  {types[type].label}
                </span>
              ))}{' '}
              で受け
            </p>

            {result2TypeDefense && 'quadruple' in result2TypeDefense && (
              <p className="flex items-center gap-2">
                ×4.00
                <div className="flex flex-wrap gap-1">
                  {result2TypeDefense.quadruple.map((type) => (
                    <span
                      key={`${type}-defense`}
                      className={clsx(
                        'whitespace-nowrap rounded py-1 px-2 text-xs text-white',
                        types[type].color
                      )}
                    >
                      {types[type].label}
                    </span>
                  ))}
                </div>
              </p>
            )}

            <p className="flex items-center gap-2">
              ×2.00
              <div className="flex flex-wrap gap-1">
                {result2TypeDefense?.double.map((type) => (
                  <span
                    key={`${type}-defense`}
                    className={clsx(
                      'whitespace-nowrap rounded py-1 px-2 text-xs text-white',
                      types[type].color
                    )}
                  >
                    {types[type].label}
                  </span>
                ))}
              </div>
            </p>

            <p className="flex items-center gap-2">
              ×0.50
              <div className="flex flex-wrap gap-1">
                {result2TypeDefense?.half.map((type) => (
                  <span
                    key={`${type}-defense`}
                    className={clsx(
                      'whitespace-nowrap rounded py-1 px-2 text-xs text-white',
                      types[type].color
                    )}
                  >
                    {types[type].label}
                  </span>
                ))}
              </div>
            </p>

            {result2TypeDefense && 'quarter' in result2TypeDefense && (
              <p className="flex items-center gap-2">
                ×0.25
                <div className="flex flex-wrap gap-1">
                  {result2TypeDefense.quarter.map((type) => (
                    <span
                      key={`${type}-defense`}
                      className={clsx(
                        'whitespace-nowrap rounded py-1 px-2 text-xs text-white',
                        types[type].color
                      )}
                    >
                      {types[type].label}
                    </span>
                  ))}
                </div>
              </p>
            )}

            <p className="flex items-center gap-2">
              ×0.00
              <div className="flex flex-wrap gap-1">
                {result2TypeDefense?.none.map((type) => (
                  <span
                    key={`${type}-defense`}
                    className={clsx(
                      'whitespace-nowrap rounded py-1 px-2 text-xs text-white',
                      types[type].color
                    )}
                  >
                    {types[type].label}
                  </span>
                ))}
              </div>
            </p>
          </div>

          <button
            type="button"
            className="w-full rounded-md bg-gray-400 py-3 text-white shadow"
            onClick={() => {
              setDecidedDefenseSelects(false);
              setDefenseSelects([]);
            }}
          >
            戻る
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
