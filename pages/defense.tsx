import type { NextPage } from 'next';

import { TbShieldCheckered } from 'react-icons/tb';

import { DefenseTypeChecker } from '@/components/DefenseTypeChecker';

const Defense: NextPage = () => {
  return (
    <div className="mx-auto max-w-[400px]">
      <div className="flex items-center justify-center gap-1 py-3">
        <TbShieldCheckered size={24} />
        <h2 className="text-lg font-bold">受けポケモンのタイプ相性</h2>
        <TbShieldCheckered size={24} />
      </div>
      <DefenseTypeChecker />
    </div>
  );
};

export default Defense;
