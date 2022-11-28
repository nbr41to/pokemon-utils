import type { FC } from 'react';
import type { Pokemon } from 'src/utils';

import clsx from 'clsx';
import { useState, useMemo } from 'react';

type Props = {
  list: Pokemon[];
};

const hiraToKata = (value: string) => {
  return value.replace(/[\u3041-\u3096]/g, (ch) =>
    String.fromCharCode(ch.charCodeAt(0) + 0x60)
  );
};

export const PokemonSearcher: FC<Props> = ({ list }) => {
  const [inputText, setInputText] = useState('');

  const filteredList = useMemo(() => {
    if (!inputText) return [];

    return list.filter((pokemon) => {
      return pokemon.name.includes(inputText);
    });
  }, [inputText, list]);

  return (
    <div className="min-h-[900px]">
      <div>
        <label htmlFor="name" className="flex flex-col">
          <span className="text-xs font-bold">ポケモン名</span>
          <input
            id="name"
            type="text"
            className="mt-1 rounded border px-3 py-2 text-lg font-bold"
            value={inputText}
            onChange={(e) => setInputText(hiraToKata(e.target.value))}
          />
        </label>
      </div>
      <div className="mx-auto mt-4 w-fit divide-y rounded border text-xs">
        {filteredList.length > 0 && (
          <div className="flex divide-x bg-gray-200 pt-0.5">
            <div className="w-20 p-1 text-center">名前</div>
            <div className="w-9 p-1 text-center">HP</div>
            <div className="w-9 p-1 text-center">攻撃</div>
            <div className="w-9 p-1 text-center">防御</div>
            <div className="w-9 p-1 text-center">特攻</div>
            <div className="w-9 p-1 text-center">特防</div>
            <div className="w-9 p-1 text-center">素早</div>
            <div className="w-9 p-1 text-center">合計</div>
          </div>
        )}

        {filteredList.map((pokemon, i) => {
          return (
            <div
              // eslint-disable-next-line react/no-array-index-key
              key={`${pokemon.no}-${i}`}
              className={clsx('flex divide-x', i % 2 === 1 && 'bg-slate-100')}
            >
              <div className="w-20 p-1 text-xs">{pokemon.name}</div>
              <div className="w-9 p-1 text-right">{pokemon.h}</div>
              <div className="w-9 p-1 text-right">{pokemon.a}</div>
              <div className="w-9 p-1 text-right">{pokemon.b}</div>
              <div className="w-9 p-1 text-right">{pokemon.c}</div>
              <div className="w-9 p-1 text-right">{pokemon.d}</div>
              <div className="w-9 p-1 text-right">{pokemon.s}</div>
              <div className="w-9 p-1 text-right">{pokemon.total}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
