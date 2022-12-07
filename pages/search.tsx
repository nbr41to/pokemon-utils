import type { NextPage } from 'next';

import { useState } from 'react';
import { TbSearch } from 'react-icons/tb';

import { PokemonSearcher } from '@/components/feature/search/PokemonSearcher';
import { InfoButton } from '@/components/InfoButton';
import { Modal } from '@/components/Modal';

const Search: NextPage = () => {
  const [openInfo, setOpenInfo] = useState(false);

  return (
    <div className="mx-auto max-w-[400px]">
      <div className="flex items-center justify-center gap-1 py-3">
        <TbSearch size={24} />
        <h2 className="text-lg font-bold">種族値検索</h2>
        <TbSearch size={24} />
        <div className="absolute right-2">
          <InfoButton onClick={() => setOpenInfo(!openInfo)} />
        </div>
      </div>
      <PokemonSearcher />
      {openInfo && (
        <Modal close={() => setOpenInfo(false)}>
          <h4 className="py-3 text-center font-bold">ポケモンの種族値検索</h4>
          <p>
            入力されたひらがな及びカタカナでポケモンを絞り込み、そのポケモンの種族値ととくせいを確認できます。
            とくせいの表示/非表示切り替えも可能です。
            ポケモンの名前を押すことで上にピン留めすることも可能です。
          </p>
        </Modal>
      )}
    </div>
  );
};

export default Search;
