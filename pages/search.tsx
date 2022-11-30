import type { NextPage } from 'next';

import { TbSearch } from 'react-icons/tb';

import { PokemonSearcher } from '@/components/PokemonSearcher';

const Search: NextPage = () => {
  return (
    <div className="mx-auto max-w-[400px]">
      <div className="flex items-center justify-center gap-1 py-3">
        <TbSearch size={24} />
        <h2 className="text-lg font-bold">種族値検索</h2>
        <TbSearch size={24} />
      </div>
      <PokemonSearcher />
    </div>
  );
};

export default Search;
