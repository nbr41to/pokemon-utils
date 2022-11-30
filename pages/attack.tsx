import type { NextPage } from 'next';

import { TbSword } from 'react-icons/tb';

import { AttackTypeChecker } from '@/components/AttackTypeChecker';

const Attack: NextPage = () => {
  return (
    <div className="mx-auto max-w-[400px]">
      <div className="flex items-center justify-center gap-1 py-3">
        <TbSword size={24} />
        <h2 className="text-lg font-bold">攻撃技のタイプ相性</h2>
        <TbSword size={24} />
      </div>
      <AttackTypeChecker />
    </div>
  );
};

export default Attack;
