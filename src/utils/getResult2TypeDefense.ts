import type { Elemental } from '../types';

import { types } from '../data/compatibilities';

export const getResult2TypeDefense = (type1: Elemental, type2: Elemental) => {
  if (!type1 && !type2) return undefined;
  if (type1 && !type2) return types[type1].defense;

  const type1Double = types[type1].defense.double;
  const type1Half = types[type1].defense.half;
  const type1None = types[type1].defense.none;
  const type2Double = types[type2].defense.double;
  const type2Half = types[type2].defense.half;
  const type2None = types[type2].defense.none;

  const offset1Double = type1Double.filter((type) => !type2Half.includes(type));
  const offset2Double = type2Double.filter((type) => !type1Half.includes(type));

  const offset1Half = type1Half.filter((type) => !type2Double.includes(type));
  const offset2Half = type2Half.filter((type) => !type1Double.includes(type));

  const none = type1None.concat(type2None);
  const quadruple = type1Double.filter(
    (type) => type2Double.includes(type) && !none.includes(type)
  );
  const quarter = type1Half.filter(
    (type) => type2Half.includes(type) && !none.includes(type)
  );
  const double = offset1Double
    .concat(offset2Double)
    .filter((type) => !quadruple.includes(type) && !none.includes(type));
  const half = offset1Half
    .concat(offset2Half)
    .filter((type) => !quarter.includes(type) && !none.includes(type));

  return {
    quadruple,
    double,
    half,
    quarter,
    none,
  };
};
