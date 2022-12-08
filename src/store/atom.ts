import type { CalcDamageOptions, Elemental } from 'src/types';

import { atom } from 'recoil';

import { elementals } from 'src/data/compatibilities';

export const attackCheckAtom = atom<Elemental | undefined>({
  key: 'attackCheck',
  default: undefined,
});
export const defenseCheckAtom = atom<Elemental[]>({
  key: 'defenseCheck',
  default: [],
});
export const compatibilityCheckAtom = atom<Elemental[]>({
  key: 'compatibilityCheck',
  default: [...elementals],
});
export const searchAtom = atom({
  key: 'searchAtom',
  default: '',
});
export const calculateAtom = atom<CalcDamageOptions>({
  key: 'calculateAtom',
  default: {
    power: 10,
    baseAttack: 0,
    effortAttack: 252,
    baseDefense: 0,
    effortDefense: 252,
    pcmAttack: 1,
    pcmDefense: 1,
    magnifications: [1],
  },
});
