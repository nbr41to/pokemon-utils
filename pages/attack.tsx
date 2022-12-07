import type { NextPage } from 'next';

import { useState } from 'react';
import { TbSword } from 'react-icons/tb';

import { AttackTypeChecker } from '@/components/feature/attack/AttackTypeChecker';
import { InfoButton } from '@/components/InfoButton';
import { Modal } from '@/components/Modal';

const Attack: NextPage = () => {
  const [openInfo, setOpenInfo] = useState(false);

  return (
    <div className="mx-auto max-w-[400px]">
      <div className="relative flex items-center justify-center gap-1 py-3">
        <TbSword size={24} />
        <h2 className="text-lg font-bold">攻撃技のタイプ相性</h2>
        <TbSword size={24} />
        <div className="absolute right-2">
          <InfoButton onClick={() => setOpenInfo(!openInfo)} />
        </div>
      </div>
      <AttackTypeChecker />
      {openInfo && (
        <Modal close={() => setOpenInfo(false)}>
          <h4 className="py-3 text-center font-bold">攻撃技のタイプ相性確認</h4>
          <p>
            攻撃するタイプを選択するとそのタイプの相性の良い悪いを確認できます。
          </p>
        </Modal>
      )}
    </div>
  );
};

export default Attack;
