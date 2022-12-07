import type { NextPage } from 'next';

import { useState } from 'react';

import { AccordionButton } from '@/components/AccordionButton';
import { AttackTypeChecker } from '@/components/feature/attack/AttackTypeChecker';
import { CompatibilityChecker } from '@/components/feature/compatibility/CompatibilityChecker';
import { DefenseTypeChecker } from '@/components/feature/defense/DefenseTypeChecker';
import { PokemonSearcher } from '@/components/feature/search/PokemonSearcher';

const Home: NextPage = () => {
  const [visibleAttackChecker, setVisibleAttackChecker] = useState(false);
  const [visibleDefenseChecker, setVisibleDefenseChecker] = useState(false);
  const [visibleCompatibilityTable, setVisibleCompatibilityTable] =
    useState(false);
  const [visiblePokemonSearcher, setVisiblePokemonSearcher] = useState(false);

  return (
    <div className="mx-auto min-h-[calc(100vh-68px)] max-w-[400px] px-4 pb-32">
      <AccordionButton
        label="攻撃技のタイプ相性"
        value={visibleAttackChecker}
        onClick={() => setVisibleAttackChecker((v) => !v)}
      />
      {visibleAttackChecker && <AttackTypeChecker />}

      <AccordionButton
        label="受けポケモンのタイプ相性"
        value={visibleDefenseChecker}
        onClick={() => setVisibleDefenseChecker((v) => !v)}
      />
      {visibleDefenseChecker && <DefenseTypeChecker />}

      <AccordionButton
        label="タイプ相性表"
        value={visibleCompatibilityTable}
        onClick={() => setVisibleCompatibilityTable((v) => !v)}
      />
      {visibleCompatibilityTable && <CompatibilityChecker />}

      <AccordionButton
        label="種族値検索"
        value={visiblePokemonSearcher}
        onClick={() => setVisiblePokemonSearcher((v) => !v)}
      />
      {visiblePokemonSearcher && <PokemonSearcher />}
    </div>
  );
};

export default Home;
