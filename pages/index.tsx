import { useState } from 'react';

import { AccordionButton } from '@/components/AccordionButton';
import { AttackTypeChecker } from '@/components/AttackTypeChecker';
import { CompatibilityTable } from '@/components/CompatibilityTable';
import { DefenseTypeChecker } from '@/components/DefenseTypeChecker';

const Home = () => {
  const [visibleAttackChecker, setVisibleAttackChecker] = useState(false);
  const [visibleDefenseChecker, setVisibleDefenseChecker] = useState(false);
  const [visibleCompatibilityTable, setVisibleCompatibilityTable] =
    useState(false);

  return (
    <div className="mx-auto max-w-[400px] px-4">
      <AccordionButton
        label="攻撃する技のタイプ"
        value={visibleAttackChecker}
        onClick={() => setVisibleAttackChecker((v) => !v)}
      />
      {visibleAttackChecker && <AttackTypeChecker />}

      <AccordionButton
        label="受けるポケモンのタイプ"
        value={visibleDefenseChecker}
        onClick={() => setVisibleDefenseChecker((v) => !v)}
      />
      {visibleDefenseChecker && <DefenseTypeChecker />}

      <AccordionButton
        label="タイプ相性表を見る"
        value={visibleCompatibilityTable}
        onClick={() => setVisibleCompatibilityTable((v) => !v)}
      />
      {visibleCompatibilityTable && <CompatibilityTable />}
    </div>
  );
};

export default Home;
