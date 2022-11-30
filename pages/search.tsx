import type { NextPage } from 'next';

import { PokemonSearcher } from '@/components/PokemonSearcher';

const Search: NextPage = () => {
  return (
    <div className="mx-auto max-w-[400px]">
      <h2 className="py-3 text-center text-lg font-bold">種族値検索</h2>
      <PokemonSearcher />
    </div>
  );
};

export default Search;
