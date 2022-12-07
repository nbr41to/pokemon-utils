import type { elementals } from './data/compatibilities';

export type Pokemon = {
  no: string;
  name: string;
  hitPoint: string;
  attack: string;
  block: string;
  contact: string;
  diffencet: string;
  speed: string;
  total: string;
  abilities: string[];
};

export type Elemental = typeof elementals[number];

export type Type = {
  [key in Elemental]: {
    label: string;
    color: string;
    attack: {
      double: Elemental[];
      half: Elemental[];
      none: Elemental[];
    };
    defense: {
      double: Elemental[];
      half: Elemental[];
      none: Elemental[];
    };
  };
};

export type CalcOptions = {
  power: number; // 技威力
  baseAttack: number; // 攻撃種族値
  effortAttack: number; // 攻撃努力値
  baseDefense: number; // 相手の防御種族値
  effortDefense: number; // 相手の防御努力値
};
