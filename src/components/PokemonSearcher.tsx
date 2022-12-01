import type { FC } from 'react';
import type { Pokemon } from 'src/utils';

import { useRef, useEffect, useState, useMemo } from 'react';

import { list } from 'src/data';

import { PokemonTable } from './PokemonTable';

const hiraToKata = (value: string) => {
  return value.replace(/[\u3041-\u3096]/g, (ch) =>
    String.fromCharCode(ch.charCodeAt(0) + 0x60)
  );
};

export const PokemonSearcher: FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputText, setInputText] = useState('');
  const [visibleAbilities, setVisibleAbilities] = useState(true);
  const [pins, setPins] = useState<Pokemon[]>([]);

  const filteredList = useMemo(() => {
    if (!inputText) return [];

    const inputTextKata = hiraToKata(inputText);
    /* 前方一致を前にするように */
    const startsWith = list.filter((pokemon) =>
      pokemon.name.startsWith(inputTextKata)
    );
    const includes = list.filter((pokemon) => {
      if (!startsWith.includes(pokemon))
        return pokemon.name.includes(inputTextKata);

      return false;
    });

    return [...startsWith, ...includes];
  }, [inputText]);

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);

  return (
    <div className="min-h-[900px]">
      <div className="px-4">
        <div>
          <label
            htmlFor="toggle-abilities"
            className="flex cursor-pointer justify-end gap-2 py-2 text-xs font-bold"
          >
            <input
              id="toggle-abilities"
              className="cursor-pointer"
              checked={visibleAbilities}
              onChange={() => setVisibleAbilities(!visibleAbilities)}
              type="checkbox"
            />
            能力を表示する
          </label>
        </div>

        <div>
          <label htmlFor="name" className="flex flex-col">
            <span className="text-xs font-bold">ポケモン名</span>
            <input
              id="name"
              ref={inputRef}
              type="text"
              className="mt-1 rounded border px-3 py-2 text-lg font-bold"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
          </label>
        </div>
      </div>

      <div className="flex h-8 items-center justify-center">
        {filteredList.length > 0 && pins.length === 0 && (
          <p className="text-sm">💡名前を押すとピン留めに登録できます。</p>
        )}
      </div>

      <PokemonTable
        visibleAbilities={visibleAbilities}
        pins={pins}
        list={filteredList}
        onClick={(pokemon) => {
          if (pins.includes(pokemon)) {
            setPins(pins.filter((d) => d !== pokemon));
          } else {
            setPins([...pins, pokemon]);
          }
        }}
      />

      <button
        type="button"
        className="fixed right-20 bottom-10 z-10 bg-white text-red-600"
        onClick={() => inputRef?.current?.focus()}
      >
        入力
      </button>
    </div>
  );
};
