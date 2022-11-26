export const elementals = [
  'normal',
  'hono',
  'mizu',
  'denki',
  'kusa',
  'kakutou',
  'doku',
  'kori',
  'zimen',
  'hiko',
  'esper',
  'mushi',
  'iwa',
  'ghost',
  'dragon',
  'aku',
  'hagane',
  'fairy',
] as const;

export type Elemental = typeof elementals[number];

type Type = {
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

export const types: Type = {
  normal: {
    label: 'ノーマル',
    color: 'bg-neutral-500',
    attack: {
      double: [],
      half: ['iwa', 'hagane'],
      none: ['ghost'],
    },
    defense: {
      double: ['kakutou'],
      half: [],
      none: ['ghost'],
    },
  },
  hono: {
    label: 'ほのお',
    color: 'bg-red-500',
    attack: {
      double: ['kusa', 'kori', 'mushi', 'hagane'],
      half: ['hono', 'mizu', 'iwa', 'dragon'],
      none: [],
    },
    defense: {
      double: ['mizu', 'zimen', 'iwa'],
      half: ['hono', 'kusa', 'kori', 'mushi', 'hagane', 'fairy'],
      none: [],
    },
  },
  mizu: {
    label: 'みず',
    color: 'bg-blue-500',
    attack: {
      double: ['hono', 'zimen', 'iwa'],
      half: ['mizu', 'kusa', 'hagane', 'dragon'],
      none: [],
    },
    defense: {
      double: ['denki', 'kusa'],
      half: ['hono', 'mizu', 'kori', 'hagane'],
      none: [],
    },
  },
  denki: {
    label: 'でんき',
    color: 'bg-yellow-500',
    attack: {
      double: ['mizu', 'hiko'],
      half: ['denki', 'kusa', 'dragon'],
      none: ['zimen'],
    },
    defense: {
      double: ['zimen'],
      half: ['denki', 'hiko', 'hagane'],
      none: [],
    },
  },
  kusa: {
    label: 'くさ',
    color: 'bg-green-500',
    attack: {
      double: ['mizu', 'zimen', 'iwa'],
      half: ['hono', 'kusa', 'doku', 'hiko', 'mushi', 'dragon', 'hagane'],
      none: [],
    },
    defense: {
      double: ['hono', 'kori', 'doku', 'hiko', 'mushi'],
      half: ['mizu', 'denki', 'kusa', 'zimen'],
      none: [],
    },
  },
  kakutou: {
    label: 'かくとう',
    color: 'bg-orange-600',
    attack: {
      double: ['normal', 'kori', 'iwa', 'aku', 'hagane'],
      half: ['doku', 'hiko', 'esper', 'mushi', 'fairy'],
      none: ['ghost'],
    },
    defense: {
      double: ['hiko', 'esper', 'fairy'],
      half: ['mushi', 'iwa', 'aku'],
      none: [],
    },
  },
  doku: {
    label: 'どく',
    color: 'bg-violet-500',
    attack: {
      double: ['kusa', 'fairy'],
      half: ['doku', 'zimen', 'iwa', 'ghost'],
      none: ['hagane'],
    },
    defense: {
      double: ['zimen', 'esper'],
      half: ['kusa', 'kakutou', 'doku', 'mushi', 'fairy'],
      none: [],
    },
  },
  kori: {
    label: 'こおり',
    color: 'bg-cyan-400',
    attack: {
      double: ['kusa', 'zimen', 'hiko', 'dragon'],
      half: ['hono', 'mizu', 'kori', 'hagane'],
      none: [],
    },
    defense: {
      double: ['hono', 'kakutou', 'iwa', 'hagane'],
      half: ['kori'],
      none: [],
    },
  },
  zimen: {
    label: 'じめん',
    color: 'bg-amber-700',
    attack: {
      double: ['hono', 'denki', 'doku', 'iwa', 'hagane'],
      half: ['kusa', 'mushi'],
      none: ['hiko'],
    },
    defense: {
      double: ['mizu', 'kusa', 'kori'],
      half: ['doku', 'iwa'],
      none: ['denki'],
    },
  },
  hiko: {
    label: 'ひこう',
    color: 'bg-sky-500',
    attack: {
      double: ['kusa', 'kakutou', 'mushi'],
      half: ['denki', 'iwa', 'hagane'],
      none: [],
    },
    defense: {
      double: ['denki', 'kori', 'iwa'],
      half: ['kusa', 'kakutou', 'mushi'],
      none: ['zimen'],
    },
  },
  esper: {
    label: 'エスパー',
    color: 'bg-purple-600',
    attack: {
      double: ['kakutou', 'doku'],
      half: ['esper', 'hagane'],
      none: ['aku'],
    },
    defense: {
      double: ['mushi', 'ghost', 'aku'],
      half: ['kakutou', 'esper'],
      none: [],
    },
  },
  mushi: {
    label: 'むし',
    color: 'bg-lime-500',
    attack: {
      double: ['kusa', 'esper', 'aku'],
      half: ['hono', 'kakutou', 'doku', 'hiko', 'ghost', 'hagane', 'fairy'],
      none: [],
    },
    defense: {
      double: ['hono', 'hiko', 'iwa'],
      half: ['kusa', 'kakutou', 'zimen'],
      none: [],
    },
  },
  iwa: {
    label: 'いわ',
    color: 'bg-stone-600',
    attack: {
      double: ['hono', 'kori', 'hiko', 'mushi'],
      half: ['kakutou', 'zimen', 'hagane'],
      none: [],
    },
    defense: {
      double: ['mizu', 'kusa', 'kakutou', 'zimen', 'hagane'],
      half: ['normal', 'hono', 'doku', 'hiko'],
      none: [],
    },
  },
  ghost: {
    label: 'ゴースト',
    color: 'bg-indigo-800',
    attack: {
      double: ['esper', 'ghost'],
      half: ['aku'],
      none: ['normal'],
    },
    defense: {
      double: ['ghost', 'aku'],
      half: ['doku', 'mushi'],
      none: ['normal', 'kakutou'],
    },
  },
  dragon: {
    label: 'ドラゴン',
    color: 'bg-pink-700',
    attack: {
      double: ['dragon'],
      half: ['hagane'],
      none: ['fairy'],
    },
    defense: {
      double: ['kori', 'dragon', 'fairy'],
      half: ['hono', 'mizu', 'denki', 'kusa'],
      none: [],
    },
  },
  aku: {
    label: 'あく',
    color: 'bg-zinc-800',
    attack: {
      double: ['esper', 'ghost'],
      half: ['kakutou', 'aku', 'fairy'],
      none: [],
    },
    defense: {
      double: ['kakutou', 'mushi', 'fairy'],
      half: ['ghost', 'aku'],
      none: ['esper'],
    },
  },
  hagane: {
    label: 'はがね',
    color: 'bg-slate-700',
    attack: {
      double: ['kori', 'iwa', 'fairy'],
      half: ['hono', 'mizu', 'denki', 'hagane'],
      none: [],
    },
    defense: {
      double: ['hono', 'kakutou', 'zimen'],
      half: [
        'normal',
        'kusa',
        'kori',
        'hiko',
        'esper',
        'mushi',
        'iwa',
        'dragon',
        'hagane',
        'fairy',
      ],
      none: ['doku'],
    },
  },
  fairy: {
    label: 'フェアリー',
    color: 'bg-fuchsia-400',
    attack: {
      double: ['kakutou', 'dragon', 'aku'],
      half: ['hono', 'doku', 'hagane'],
      none: [],
    },
    defense: {
      double: ['doku', 'hagane'],
      half: ['kakutou', 'mushi', 'aku'],
      none: ['dragon'],
    },
  },
};

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

  const quadruple = type1Double.filter((type) => type2Double.includes(type));
  const quarter = type1Half.filter((type) => type2Half.includes(type));
  const double = offset1Double
    .concat(offset2Double)
    .filter((type) => !quadruple.includes(type));
  const half = offset1Half
    .concat(offset2Half)
    .filter((type) => !quarter.includes(type));
  const none = type1None.concat(type2None);

  return {
    quadruple,
    double,
    half,
    quarter,
    none,
  };
};

export const generateCompatibilityTable = (type: Elemental) => {
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
