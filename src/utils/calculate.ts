import type { CalcOptions } from 'src/types';

/* ダメージの計算 */
export const getDamage = (options: CalcOptions) => {
  const { power, baseAttack, effortAttack, baseDefense, effortDefense } =
    options;

  const attack =
    (Math.floor(baseAttack * 2 + 31 + effortAttack / 4) * 50) / 100 + 5;
  const defense =
    (Math.floor(baseDefense * 2 + 31 + effortDefense / 4) * 50) / 100 + 5;

  const damage = Math.floor(
    (Math.floor(50 * 2 + 2) * Math.floor((power * attack) / defense)) / 50 + 2
  );

  return damage;
};
