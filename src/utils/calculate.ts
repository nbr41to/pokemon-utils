import type { CalcDamageOptions, CalcStatusOptions } from 'src/types';

/* ダメージの計算 */
export const getDamageRange = (options: CalcDamageOptions) => {
  const {
    power,
    baseAttack,
    effortAttack,
    pcmAttack,
    baseDefense,
    effortDefense,
    pcmDefense,
  } = options;

  const attack =
    ((Math.floor(baseAttack * 2 + 31 + effortAttack / 4) * 50) / 100 + 5) *
    pcmAttack;
  const defense =
    ((Math.floor(baseDefense * 2 + 31 + effortDefense / 4) * 50) / 100 + 5) *
    pcmDefense;

  const damage = Math.floor(
    (Math.floor(50 * 2 + 2) * Math.floor((power * attack) / defense)) / 50 + 2
  );

  return [Math.floor(damage * 0.85), Math.floor(damage * 1.0)];
};
export const getStatus = (options: CalcStatusOptions) => {
  const { base, effort, pcm, isHitPoint } = options;

  const status =
    ((Math.floor(base * 2 + 31 + effort / 4) * 50) / 100 +
      (isHitPoint ? 60 : 5)) *
    pcm;

  return status;
};
