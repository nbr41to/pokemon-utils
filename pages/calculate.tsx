import type { NextPage } from 'next';

import { TbCalculator } from 'react-icons/tb';

import { Calculator } from '@/components/feature/calculate/Calculator';

const Calculate: NextPage = () => {
  return (
    <div className="mx-auto max-w-[400px]">
      <div className="flex items-center justify-center gap-1 py-3">
        <TbCalculator size={24} />
        <h2 className="text-lg font-bold">ステータス・ダメージ計算</h2>
        <TbCalculator size={24} />
      </div>
      <Calculator />
    </div>
  );
};

export default Calculate;
