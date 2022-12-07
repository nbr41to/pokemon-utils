import type { FC } from 'react';

import { useRecoilState } from 'recoil';

import { getDamage } from '@/utils/calculate';

import { calculateAtom } from 'src/store/atom';

export const Calculator: FC = () => {
  const [formState, setFormState] = useRecoilState(calculateAtom);

  return (
    <div className="px-3">
      <h2 className="text-center">※ β版 ※ 制作中 ※</h2>

      <h3 className="font-bold">ダメージ計算</h3>
      <div>{getDamage(formState)}</div>
      <div className="space-y-2 py-2">
        <div className="space-x-3">
          <label htmlFor="power">
            技威力
            <input
              id="power"
              className="ml-2 w-20 rounded border px-3 py-2 font-bold"
              type="tel"
              value={formState.power}
              onChange={(e) =>
                setFormState((prev) => ({
                  ...prev,
                  power: Number(e.target.value),
                }))
              }
            />
          </label>
          <label htmlFor="base-attack">
            攻撃種族値
            <input
              id="base-attack"
              className="ml-2 w-20 rounded border px-3 py-2 font-bold"
              type="tel"
              value={formState.baseAttack}
              onChange={(e) =>
                setFormState((prev) => ({
                  ...prev,
                  baseAttack: Number(e.target.value),
                }))
              }
            />
          </label>
        </div>
        <div className="space-x-3">
          <label htmlFor="a">
            個体値
            <input
              id="a"
              className="ml-2 w-20 rounded border px-3 py-2 font-bold"
              type="tel"
              value={31}
            />
          </label>
          <label htmlFor="effort">
            攻撃努力値
            <select
              name="effort"
              id="effort"
              className="ml-2 w-20 rounded border px-3 py-2 font-bold"
              value={formState.effortAttack}
              onChange={(e) =>
                setFormState((prev) => ({
                  ...prev,
                  effortAttack: Number(e.target.value),
                }))
              }
            >
              <option value="252">252</option>
              <option value="0">0</option>
            </select>
          </label>
        </div>
        <div className="space-x-3">
          <label htmlFor="base-defense">
            防御種族値
            <input
              id="base-defense"
              className="ml-2 w-20 rounded border px-3 py-2 font-bold"
              type="tel"
              value={formState.baseDefense}
              onChange={(e) =>
                setFormState((prev) => ({
                  ...prev,
                  baseDefense: Number(e.target.value),
                }))
              }
            />
          </label>
          <label htmlFor="effort">
            防御努力値
            <select
              name="effort"
              id="effort"
              className="ml-2 w-20 rounded border px-3 py-2 font-bold"
              value={formState.effortDefense}
              onChange={(e) =>
                setFormState((prev) => ({
                  ...prev,
                  effortDefense: Number(e.target.value),
                }))
              }
            >
              <option value="252">252</option>
              <option value="0">0</option>
            </select>
          </label>
        </div>
      </div>

      <label
        htmlFor="a"
        className="flex cursor-pointer gap-2 py-2 text-sm font-bold"
      >
        <input id="" className="cursor-pointer" type="checkbox" />
        性格補正
      </label>
      <label
        htmlFor="a"
        className="flex cursor-pointer gap-2 py-2 text-sm font-bold"
      >
        <input id="" className="cursor-pointer" type="checkbox" />
        こだわりハチマキ・メガネ
      </label>
      <label
        htmlFor="a"
        className="flex cursor-pointer gap-2 py-2 text-sm font-bold"
      >
        <input id="" className="cursor-pointer" type="checkbox" />
        いのちのたま
      </label>

      <h3 className="font-bold">ステータス計算</h3>
    </div>
  );
};
