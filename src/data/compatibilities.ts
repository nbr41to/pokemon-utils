import type { Type } from 'src/types';

export const elementals = [
  'normal',
  'hono',
  'mizu',
  'denki',
  'kusa',
  'kori',
  'kakutou',
  'doku',
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
