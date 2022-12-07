import type { NextPage } from 'next';

import { useState } from 'react';
import { TbShieldCheckered } from 'react-icons/tb';

import { DefenseTypeChecker } from '@/components/feature/defense/DefenseTypeChecker';
import { InfoButton } from '@/components/InfoButton';
import { Modal } from '@/components/Modal';

const Defense: NextPage = () => {
  const [openInfo, setOpenInfo] = useState(false);

  return (
    <div className="mx-auto max-w-[400px]">
      <div className="flex items-center justify-center gap-1 py-3">
        <TbShieldCheckered size={24} />
        <h2 className="text-lg font-bold">受けポケモンのタイプ相性</h2>
        <TbShieldCheckered size={24} />
        <div className="absolute right-2">
          <InfoButton onClick={() => setOpenInfo(!openInfo)} />
        </div>
      </div>
      <DefenseTypeChecker />
      {openInfo && (
        <Modal close={() => setOpenInfo(false)}>
          <h4 className="py-3 text-center font-bold">
            受けポケモンのタイプ相性確認
          </h4>
          <p>
            攻撃を受けるポケモンのタイプを選択すると、そのポケモンと相性の良い悪いタイプを確認できます。
            選択できるタイプは1〜2までです。
          </p>
        </Modal>
      )}
    </div>
  );
};

export default Defense;
