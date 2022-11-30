import type { NextPage } from 'next';

import { CompatibilityChecker } from '@/components/CompatibilityChecker';

const Compatibility: NextPage = () => {
  return (
    <div className="mx-auto max-w-[400px]">
      <h2 className="py-3 text-center text-lg font-bold">タイプ相性表</h2>
      <CompatibilityChecker />
    </div>
  );
};

export default Compatibility;
