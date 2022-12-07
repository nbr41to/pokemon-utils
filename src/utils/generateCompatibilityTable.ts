import type { Elemental } from 'src/types';

import { types } from 'src/data/compatibilities';

export const generateCompatibilityTable = (type: Elemental) => {
  // @ts-expect-error ignore
  const rows = Object.keys(types).map((key: Elemental) => {
    if (types[key].defense.double.includes(type)) {
      return '○';
    }
    if (types[key].defense.half.includes(type)) {
      return '△';
    }
    if (types[key].defense.none.includes(type)) {
      return '×';
    }

    return '';
  });

  return rows;
};
