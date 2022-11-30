import type { NextPage } from 'next';

import { DefenseTypeChecker } from '@/components/DefenseTypeChecker';

const Defense: NextPage = () => {
  return (
    <div className="mx-auto max-w-[400px]">
      <h2 className="py-3 text-center text-lg font-bold">
        受けポケモンのタイプ相性
      </h2>
      <DefenseTypeChecker />
    </div>
  );
};

export default Defense;
