import type { FC } from 'react';
import type { Pokemon } from 'src/utils';

import { PokemonTableRows } from './PokemonTableRows';

type Props = {
  visibleAbilities: boolean;
  list: Pokemon[];
  pins: Pokemon[];
  onClick: (pokemon: Pokemon) => void;
};

export const PokemonTable: FC<Props> = ({
  visibleAbilities,
  pins,
  list,
  onClick,
}) => {
  return (
    <div className="mx-auto w-fit divide-y rounded border text-xs">
      {(list.length > 0 || pins.length > 0) && (
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
      {pins.length > 0 && (
        <PokemonTableRows
          visibleAbilities={visibleAbilities}
          list={pins}
          onClick={onClick}
          bgColor="bg-yellow-50"
        />
      )}
      <PokemonTableRows
        visibleAbilities={visibleAbilities}
        list={list}
        onClick={onClick}
      />
    </div>
  );
};
