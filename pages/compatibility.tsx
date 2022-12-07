import type { NextPage } from 'next';

import { useState } from 'react';
import { TbTable } from 'react-icons/tb';

import { CompatibilityChecker } from '@/components/feature/compatibility/CompatibilityChecker';
import { InfoButton } from '@/components/InfoButton';
import { Modal } from '@/components/Modal';

const Compatibility: NextPage = () => {
  const [openInfo, setOpenInfo] = useState(false);

  return (
    <div className="mx-auto max-w-[400px]">
      <div className="flex items-center justify-center gap-1 py-3">
        <TbTable size={24} />
        <h2 className="text-lg font-bold">タイプ相性表</h2>
        <TbTable size={24} />
        <div className="absolute right-2">
          <InfoButton onClick={() => setOpenInfo(!openInfo)} />
        </div>
      </div>
      <CompatibilityChecker />
      {openInfo && (
        <Modal close={() => setOpenInfo(false)}>
          <h4 className="py-3 text-center font-bold">絞り込めるタイプ相性表</h4>
          <p>
            左が攻撃タイプで、上が受けるポケモンのタイプです。
            タイプを選択すると、その順に攻撃するタイプと全タイプの相性を確認できます。
            より多くのタイプに優位になるような技構成を考えるときなどに使用します。
            最初はすべてのタイプが選択された状態になっています。
          </p>
        </Modal>
      )}
    </div>
  );
};

export default Compatibility;
