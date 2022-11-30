import type { NextPage } from 'next';

import { AttackTypeChecker } from '@/components/AttackTypeChecker';

const Attack: NextPage = () => {
  return (
    <div className="mx-auto max-w-[400px]">
      <h2 className="py-3 text-center text-lg font-bold">攻撃技のタイプ相性</h2>
      <AttackTypeChecker />
    </div>
  );
};

export default Attack;
