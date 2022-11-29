import type { FC } from 'react';
import type { Pokemon } from 'src/utils';

import clsx from 'clsx';

type Props = {
  visibleAbilities: boolean;
  list: Pokemon[];
  onClick: (pokemon: Pokemon) => void;
  bgColor?: string;
};

export const PokemonTableRows: FC<Props> = ({
  visibleAbilities,
  list,
  onClick,
  bgColor,
}) => {
  return (
    <>
      {list.map((pokemon, i) => {
        return (
          <div
            // eslint-disable-next-line react/no-array-index-key
            key={`${pokemon.no}-${i}`}
            className={clsx(
              'flex divide-x text-sm',

              i % 2 === 1 && 'bg-slate-100',
              bgColor
            )}
          >
            <button
              className="flex w-20 items-center p-1 text-xs"
              type="button"
              onClick={() => onClick(pokemon)}
            >
              {pokemon.name}
            </button>
            <div className="w-min">
              <div className="flex divide-x">
                <div className="w-9 p-1 text-right">{pokemon.hitPoint}</div>
                <div className="w-9 p-1 text-right">{pokemon.attack}</div>
                <div className="w-9 p-1 text-right">{pokemon.block}</div>
                <div className="w-9 p-1 text-right">{pokemon.contact}</div>
                <div className="w-9 p-1 text-right">{pokemon.diffencet}</div>
                <div className="w-9 p-1 text-right">{pokemon.speed}</div>
                <div className="w-9 p-1 text-right">{pokemon.total}</div>
              </div>
              {visibleAbilities && (
                <div className="whitespace-pre-wrap border-t p-1 text-xs">
                  {pokemon.abilities.join('、')}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </>
  );
};
