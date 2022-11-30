import type { NextPage } from 'next';

import { TbTable } from 'react-icons/tb';

import { CompatibilityChecker } from '@/components/CompatibilityChecker';

const Compatibility: NextPage = () => {
  return (
    <div className="mx-auto max-w-[400px]">
      <div className="flex items-center justify-center gap-1 py-3">
        <TbTable size={24} />
        <h2 className="text-lg font-bold">タイプ相性表</h2>
        <TbTable size={24} />
      </div>
      <CompatibilityChecker />
    </div>
  );
};

export default Compatibility;
